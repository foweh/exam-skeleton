// ===== 🎨 自定义题型 / Custom Questions =====
// 中英双语题库 | Bilingual question bank
// 你可以放任何不属于以上分类的题目

(function() {
  const questions = [
    {
      id: "custom-001",
      question: "以下哪个是编程范式？",
      questionEn: "Which of the following is a programming paradigm?",
      options: ["面向对象编程", "函数式编程", "逻辑式编程", "以上都是"],
      optionsEn: ["Object-oriented programming", "Functional programming", "Logic programming", "All of the above"],
      answer: "D",
      answerEn: "D"
    },
    {
      id: "custom-002",
      question: "SQL中的JOIN操作用于什么目的？",
      questionEn: "What is the purpose of the JOIN operation in SQL?",
      options: ["连接两个表", "查询数据", "更新数据", "删除数据"],
      optionsEn: ["Join two tables", "Query data", "Update data", "Delete data"],
      answer: "A",
      answerEn: "A"
    }
  ];
  window.registerQuestions('自定义', questions);
})();