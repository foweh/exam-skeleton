// ===== ⭕ 判断题题库 =====
// 编辑本文件即可增删题目，系统会自动加载
// 复制下面模板，替换内容即可

(function() {
  const questions = [
    // ── ✏️ 模板：判断题 ──
    {
      id: "tf-001",
      question: "一个算法的时间复杂度是指算法运行所需的时间。",
      options: ["正确", "错误"],
      answer: "B"
    },
    {
      id: "tf-002",
      question: "所有的算法都必须有输入。",
      options: ["正确", "错误"],
      answer: "B"
    },
    {
      id: "tf-003",
      question: "动态规划算法一定比贪心算法更优。",
      options: ["正确", "错误"],
      answer: "B"
    },
    {
      id: "tf-004",
      question: "二分搜索算法利用了分治策略。",
      options: ["正确", "错误"],
      answer: "A"
    }
  ];
  window.registerQuestions('判断题', questions);
})();

// ── 怎么加新题？ ──
// 1. 复制一份上面的 { id: "...", ... } 对象
// 2. 粘贴到 questions 数组里
// 3. 修改内容：
//    - id:      唯一标识，建议 "tf-编号"
//    - question: 题目文本（陈述句）
//    - options:  固定为 ["正确", "错误"]
//    - answer:   "A"=正确, "B"=错误
// 4. 保存文件，刷新页面即可生效