/**
 * ============================================================
 *  📦 题库加载器 —— 动态发现并加载 questions/ 目录下的所有题库
 *  ============================================================
 *  【用户指引】
 *    🔹 在 questions/ 下新建 .js 文件，按下方格式写题目，系统自动加载
 *    🔹 删掉某个 .js 文件 = 删掉那一类题
 *    🔹 编辑 .js 文件 = 增删改题目
 *    🔹 支持题型：选择题、填空题、简答题、判断题、代码题
 *
 *  【每个题库文件格式】
 *    (function() {
 *      const questions = [
 *        { id: "xxx", question: "题目内容", options: ["A","B","C","D"], answer: "A" },
 *        // 或 { id: "xxx", question: "题目内容", answer: "答案" }  （填空题/简答题）
 *        // 或 { id: "xxx", question: "题目内容", options: ["A","B"], answer: "A", isJudge: true }  （判断题）
 *      ];
 *      window.registerQuestions && window.registerQuestions('题型名', questions);
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
    // 用 Set 以 question 文本去重（同一个题库文件内部）
    const seen = new Set(rawBank[typeName].map(q => q.question));
    questions.forEach(q => {
      if (!seen.has(q.question)) {
        seen.add(q.question);
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

    /** 从指定题型随机抽取 n 道题（去重不重复） */
    getRandomQuestions: function(typeName, n) {
      var pool = (rawBank[typeName] || []).slice();
      // Fisher–Yates 洗牌
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i];
        pool[i] = pool[j];
        pool[j] = tmp;
      }
      return pool.slice(0, Math.min(n, pool.length));
    },

    /** 原始数据（直接操作） */
    _raw: rawBank
  };

  // ==========================================================
  //  6. 启动：加载完毕后触发 window.onQuestionsLoaded
  // ==========================================================
  loadAllQuestions(function(bank) {
    // 触发页面初始化
    if (typeof window.onQuestionsLoaded === 'function') {
      window.onQuestionsLoaded(bank);
    }
    // 派发自定义事件（备用）
    var evt = new CustomEvent('questionsLoaded', { detail: { bank: bank } });
    document.dispatchEvent(evt);
  });

})();