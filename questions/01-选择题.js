// ===== 📝 选择题 / Multiple Choice =====
// 中英双语题库 | Bilingual question bank
// question / questionEn, options / optionsEn, answer / answerEn

(function() {
  const questions = [
    // ── English only (no zh equivalent) ──
    {
      id: "mc-001",
      question: "以下哪一项不是算法的基本特性？",
      questionEn: "Which of the following is NOT a basic property of algorithms?",
      options: ["有穷性", "确定性", "高效性", "可行性"],
      optionsEn: ["Finiteness", "Definiteness", "Efficiency", "Feasibility"],
      answer: "C",
      answerEn: "C"
    },
    {
      id: "mc-002",
      question: "程序是算法用某种程序设计语言的（ ）。",
      questionEn: "A program is the ( ) of an algorithm in a programming language.",
      options: ["具体实现", "设计思路", "伪代码", "流程图"],
      optionsEn: ["concrete implementation", "design idea", "pseudo-code", "flowchart"],
      answer: "A",
      answerEn: "A"
    },
    {
      id: "mc-003",
      question: "下列哪种排序算法在最坏情况下的时间复杂度最低？",
      questionEn: "Which sorting algorithm has the lowest worst-case time complexity?",
      options: ["冒泡排序", "插入排序", "归并排序", "快速排序"],
      optionsEn: ["Bubble sort", "Insertion sort", "Merge sort", "Quick sort"],
      answer: "C",
      answerEn: "C"
    }
  ];
  window.registerQuestions('选择题', questions);
})();

// ── How to add questions? ──
// Copy a { ... } block above, paste below, change fields.
// For English-only or Chinese-only: omit the other language field.
// Required: id, question, answer (options for MC / True-False only).