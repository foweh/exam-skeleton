/**
 * ============================================================
 *  📦 题库加载器 —— 动态发现并加载 questions/ 目录下的所有题库
 *  ============================================================
 *  【用户指引】
 *    🔹 在 questions/ 下新建 .js 文件，按下方格式写题目，系统自动加载
 *    🔹 删掉某个 .js 文件 = 删掉那一类题
 *    🔹 编辑 .js 文件 = 增删改题目
 *    🔹 支持题型：选择题、填空题、简答题、判断题
 *    🔹 支持中英双语：字段加 En 后缀即可 (questionEn, optionsEn, answerEn)
 *
 *  【每个题库文件格式】
 *    (function() {
 *      const questions = [
 *        // 中文（默认）
 *        { id: "mc-001", question: "题目内容", options: ["A","B","C","D"], answer: "A" },
 *        // 中英双语（可只提供中文，En 字段可选）
 *        { id: "mc-002",
 *          question: "中文题目",    questionEn: "English question",
 *          options: ["A选项","B选项"], optionsEn: ["Option A","Option B"],
 *          answer: "A",             answerEn: "A"
 *        },
 *        // 填空题/简答题（无需 options）
 *        { id: "fb-001", question: "题目______", questionEn: "Fill ______", answer: "答案", answerEn: "answer" }
 *      ];
 *      window.registerQuestions('题型名', questions);
 *    })();
 *
 *  【增加新的题型文件】
 *    在 question-loader.js 中 QUESTION_FILES 数组里加一行
 *    推荐命名：01-选择题.js  02-填空题.js  ...（数字前缀控制显示顺序）
 * ============================================================
 */

(function() {

  // ==========================================================
  //  1. 注册机制 —— 每个题库文件通过此函数上报
  // ==========================================================
  const rawBank = {};   // { typeName: [questions...] }

  window.registerQuestions = function(typeName, questions) {
    if (!Array.isArray(questions) || questions.length === 0) return;
    if (!rawBank[typeName]) rawBank[typeName] = [];
    // 用 Set 以 question 文本去重（双语均检查）
    const seenZh = new Set(rawBank[typeName].map(q => q.question));
    const seenEn = new Set(rawBank[typeName].map(q => q.questionEn).filter(Boolean));
    questions.forEach(q => {
      // 同一题库文件内部不重复（中文或英文任意一个匹配即跳过）
      if (!seenZh.has(q.question) && !seenEn.has(q.questionEn)) {
        seenZh.add(q.question);
        if (q.questionEn) seenEn.add(q.questionEn);
        rawBank[typeName].push(q);
      }
    });
  };

  // ==========================================================
  //  2. 加载队列 —— 要加载的题库文件列表
  // ==========================================================
  // ★ 在此处增删行来增删题型 ★
  const QUESTION_FILES = [
    'questions/01-选择题.js',
    'questions/02-填空题.js',
    'questions/03-简答题.js',
    'questions/04-判断题.js',
    'questions/05-自定义题.js'
  ];

  // ==========================================================
  //  3. 动态加载脚本
  // ==========================================================
  let loadedCount = 0;

  function loadAllQuestions(callback) {
    if (QUESTION_FILES.length === 0) {
      callback && callback({});
      return;
    }

    QUESTION_FILES.forEach(function(filePath) {
      var script = document.createElement('script');
      script.src = filePath;
      script.onload = script.onerror = function() {
        loadedCount++;
        if (loadedCount >= QUESTION_FILES.length) {
          // 所有文件加载完毕
          deduplicateAcrossTypes();
          callback && callback(rawBank);
        }
      };
      document.head.appendChild(script);
    });
  }

  // ==========================================================
  //  4. 跨文件去重（同一题型中，不同文件可能有相同题目）
  // ==========================================================
  function deduplicateAcrossTypes() {
    Object.keys(rawBank).forEach(function(type) {
      var seen = new Set();
      rawBank[type] = rawBank[type].filter(function(q) {
        var key = q.question.trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    });
  }

  // ==========================================================
  //  5. 对外 API —— 暴露给 HTML 使用
  // ==========================================================
  window.题库 = {
    /** 所有题型列表 ['选择题','填空题',...] */
    getTypes: function() {
      return Object.keys(rawBank);
    },

    /** 某题型的所有题目 */
    getQuestions: function(typeName) {
      return rawBank[typeName] || [];
    },

    /** 全部题目总数 */
    getTotalCount: function() {
      var total = 0;
      Object.values(rawBank).forEach(function(arr) { total += arr.length; });
      return total;
    },

    /** 某题型的题目数 */
    getTypeCount: function(typeName) {
      return (rawBank[typeName] || []).length;
    },

    /** 从指定题型随机抽取 n 道题 */
    getRandomQuestions: function(typeName, n) {
      var pool = (rawBank[typeName] || []).slice();
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
      }
      return pool.slice(0, Math.min(n, pool.length));
    },

    /**
     * 根据当前语言获取题目的本地化字段
     * @param {Object} q        题目对象
     * @param {string} field    字段名，如 "question" / "options" / "answer"
     * @param {string} [lang]   语言 "zh" 或 "en"，默认 window.__lang
     * @returns 本地化值
     */
    getLocalized: function(q, field, lang) {
      lang = lang || (window.__lang || 'zh');
      if (lang === 'en') {
        var enField = field + 'En';
        if (q[enField] !== undefined && q[enField] !== null) return q[enField];
      }
      return q[field];
    },

    /** 原始数据 */
    _raw: rawBank
  };

  // ==========================================================
  //  6. 启动：加载完毕后触发 window.onQuestionsLoaded
  // ==========================================================
  loadAllQuestions(function(bank) {
    if (typeof window.onQuestionsLoaded === 'function') {
      window.onQuestionsLoaded(bank);
    }
    var evt = new CustomEvent('questionsLoaded', { detail: { bank: bank } });
    document.dispatchEvent(evt);
  });

})();