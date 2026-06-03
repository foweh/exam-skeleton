// ===== 📖 简答题 / Essay & Short Answer =====
// 中英双语题库 | Bilingual question bank

(function() {
  const questions = [
    {
      id: "ess-001",
      question: "什么是算法？算法具有哪些重要特性？",
      questionEn: "What is an algorithm? What are its important properties?",
      answer: "算法是指在解决问题时，按照某种机械步骤一定可以得到问题结果的处理过程。算法具有五个重要特性：①有穷性——执行有限步后结束；②确定性——每条指令清晰无歧义；③可行性——每一步都能执行；④输入——有0个或多个输入；⑤输出——至少有一个输出。",
      answerEn: "An algorithm is a process that, following a mechanical sequence of steps, is guaranteed to produce a result for a given problem. The five properties are: ① Finiteness — terminates after a finite number of steps; ② Definiteness — each instruction is clear and unambiguous; ③ Feasibility — every step is executable; ④ Input — zero or more inputs; ⑤ Output — at least one output."
    },
    {
      id: "ess-002",
      question: "简述分治法的基本思想。",
      questionEn: "Briefly describe the basic idea of divide and conquer.",
      answer: "分治法的核心思想是将一个复杂问题分解为若干个规模较小、结构相似的子问题，分别递归求解子问题，再将子问题的解合并为原问题的解。执行过程分为三步：分解（Divide）、解决（Conquer）、合并（Combine）。",
      answerEn: "The core idea of divide and conquer is to break a complex problem into smaller, structurally similar subproblems, recursively solve each subproblem, and then combine their solutions into the solution of the original problem. The process has three steps: Divide, Conquer, and Combine."
    },
    {
      id: "ess-003",
      question: "简述动态规划与分治法的主要区别。",
      questionEn: "What is the main difference between dynamic programming and divide and conquer?",
      answer: "①子问题关系不同：分治法的子问题相互独立无重叠；动态规划的子问题有重叠。②求解方式不同：分治法直接递归求解后合并；动态规划自底向上计算，用表格存储中间结果避免重复。③适用场景不同：分治法适用于子问题独立的问题，动态规划适用于有重叠子问题和最优子结构的问题。",
      answerEn: "① Subproblem relationship: Divide and conquer subproblems are independent with no overlap; DP subproblems overlap. ② Approach: Divide and conquer directly recurses then combines; DP computes bottom-up using a table to avoid redundant work. ③ Applicability: Divide and conquer fits independent subproblems; DP fits overlapping subproblems with optimal substructure."
    }
  ];
  window.registerQuestions('简答题', questions);
})();