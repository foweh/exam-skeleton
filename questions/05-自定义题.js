// ===== 🎨 自定义题型示例 =====
// 这里放不属于以上分类的题目
// 你可以任意修改题型名称和题目内容

(function() {
  const questions = [
    // ── ✏️ 模板：你甚至可以把选项改成数字/字母以外的内容 ──
    {
      id: "custom-001",
      question: "以下哪个是编程范式？",
      options: ["面向对象编程", "函数式编程", "逻辑式编程", "以上都是"],
      answer: "D"
    },
    {
      id: "custom-002",
      question: "SQL中的JOIN操作用于什么目的？",
      options: ["连接两个表", "查询数据", "更新数据", "删除数据"],
      answer: "A"
    }
  ];
  window.registerQuestions('自定义', questions);
})();

// ── 甚至可以直接在 HTML 里加一个新标签，建一个全新的题型文件 ──
// 方法：复制本文件 -> 重命名 -> 改 window.registerQuestions('新题型名', ...)
// -> 在 question-loader.js 的 QUESTION_FILES 列表末尾加上一行