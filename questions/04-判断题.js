// ===== ⭕ 判断题 / True or False =====
// 中英双语题库 | Bilingual question bank

(function() {
  const questions = [
    {
      id: "tf-001",
      question: "一个算法的时间复杂度是指算法运行所需的时间。",
      questionEn: "The time complexity of an algorithm refers to the actual running time of the algorithm.",
      options: ["正确", "错误"],
      optionsEn: ["True", "False"],
      answer: "B",
      answerEn: "B"
    },
    {
      id: "tf-002",
      question: "所有的算法都必须有输入。",
      questionEn: "All algorithms must have an input.",
      options: ["正确", "错误"],
      optionsEn: ["True", "False"],
      answer: "B",
      answerEn: "B"
    },
    {
      id: "tf-003",
      question: "动态规划算法一定比贪心算法更优。",
      questionEn: "Dynamic programming is always better than greedy algorithms.",
      options: ["正确", "错误"],
      optionsEn: ["True", "False"],
      answer: "B",
      answerEn: "B"
    },
    {
      id: "tf-004",
      question: "二分搜索算法利用了分治策略。",
      questionEn: "Binary search uses the divide-and-conquer strategy.",
      options: ["正确", "错误"],
      optionsEn: ["True", "False"],
      answer: "A",
      answerEn: "A"
    }
  ];
  window.registerQuestions('判断题', questions);
})();