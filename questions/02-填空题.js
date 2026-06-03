// ===== ✍️ 填空题 / Fill-in-the-blank =====
// 中英双语题库 | Bilingual question bank
// question / questionEn, answer / answerEn

(function() {
  const questions = [
    {
      id: "fb-001",
      question: "算法的复杂性有______复杂性和______复杂性之分。",
      questionEn: "Algorithm complexity can be classified into ______ complexity and ______ complexity.",
      answer: "时间,空间",
      answerEn: "time,space"
    },
    {
      id: "fb-002",
      question: "程序是算法用某种程序设计语言的______。",
      questionEn: "A program is the concrete ______ of an algorithm in a programming language.",
      answer: "具体实现",
      answerEn: "implementation"
    },
    {
      id: "fb-003",
      question: "算法由若干条指令组成的有穷序列，需要满足输入、输出、确定性、可行性和______。",
      questionEn: "An algorithm is a finite sequence of instructions, requiring input, output, definiteness, feasibility, and ______.",
      answer: "有穷性",
      answerEn: "finiteness"
    }
  ];
  window.registerQuestions('填空题', questions);
})();

// ── How to add questions? ──
// Use ______ (6 underscores) to mark blanks in the question text.
// Multiple answers: separate with Chinese comma (，) or comma (,).