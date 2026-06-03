# 📚 通用考试练习系统 · 骨架版
# 📚 Generic Exam Practice System · Skeleton

> 🇨🇳 一个轻量、可自定义、**中英双语**的考试练习系统骨架。
> 🇬🇧 A lightweight, customizable, **bilingual (zh/en)** exam practice system skeleton.

---

## ✨ 特性 / Features

| 🇨🇳 中文 | 🇬🇧 English |
|----------|-------------|
| ✅ **四大题型**：选择/填空/简答/判断 | ✅ **4 question types**: MC, fill-blank, essay, true/false |
| 🔤 **中英双语切换**：一键切换界面 + 题目语言 | 🔤 **Bilingual toggle**: one-click switch UI + question language |
| 🎯 **练习模式**：选题型 → 逐题练习 → 即时反馈 | 🎯 **Practice mode**: pick type → practice → instant feedback |
| 📝 **考试模式**：随机抽题、限时、自动评分 | 📝 **Exam mode**: random draw, timer, auto-grading |
| 📕 **错题本**：自动收录 → 支持重做/清空 | 📕 **Wrong book**: auto-collect → replay / clear |
| 📊 **统计面板**：做题数 / 正确率 / 进度激励 | 📊 **Stats dashboard**: total / accuracy / encouragement |
| 📂 **纯文件化**：改 `.js` 文件 = 改题库 | 📂 **File-based**: edit `.js` files = edit question bank |
| 🚫 **零依赖**：无需 npm / 后端 / 数据库 | 🚫 **Zero deps**: no npm, no backend, no database |

---

## 🚀 快速开始 / Quick Start

### 1️⃣ 启动系统 / Launch

直接双击打开 `index.html`（用浏览器打开即可）。

```
📁 exam-skeleton/
├── index.html                 ← 主界面（双击打开 / double-click to open）
├── question-loader.js         ← 题库加载器（一般不用动 / rarely needs editing）
├── README.md                  ← 本文件 / this file
└── questions/                 ← 题库文件夹 / your question banks go here
    ├── 01-选择题.js
    ├── 02-填空题.js
    ├── 03-简答题.js
    ├── 04-判断题.js
    └── 05-自定义题.js
```

### 2️⃣ 切换语言 / Switch Language

点击右上角的 **中/EN** 按钮，整个界面 + 题目语言都会切换。

Click the **中/EN** button in the top-right corner to switch the entire UI and question content.

---

## 📝 添加题目 / Adding Questions

### 选择题 / Multiple Choice

```javascript
{
  id: "mc-101",
  question: "1+1等于几？",                              // 中文题目
  questionEn: "What is 1+1?",                            // English question
  options: ["1", "2", "3", "4"],                         // 中文选项
  optionsEn: ["1", "2", "3", "4"],                       // English options
  answer: "B",                                            // 正确答案（字母）
  answerEn: "B"                                           // English answer
}
```

### 填空题 / Fill-in-the-blank

```javascript
{
  id: "fb-101",
  question: "CSS中设置字体颜色的属性是______。",
  questionEn: "The CSS property for text color is ______.",
  answer: "color",              // 答案
  answerEn: "color"             // English answer
}
```

### 简答题 / Essay

```javascript
{
  id: "ess-101",
  question: "请简述MVC架构。",
  questionEn: "Briefly describe the MVC architecture.",
  answer: "MVC是…（参考解答）",
  answerEn: "MVC is… (reference answer)"
}
```

### 判断题 / True or False

```javascript
{
  id: "tf-101",
  question: "HTML是一种编程语言。",
  questionEn: "HTML is a programming language.",
  options: ["正确", "错误"],
  optionsEn: ["True", "False"],
  answer: "B",          // A=正确/True, B=错误/False
  answerEn: "B"
}
```

> 💡 **提示 / Tips**：
> - 可以只提供中文（不加 `En` 字段），英文模式下会回退显示中文
> - 可以只提供英文（不加中文 `question` 字段），中文模式下会回退显示英文
> - You can provide only Chinese (omit `En` fields) — English mode falls back to Chinese text
> - You can provide only English — Chinese mode falls back to English text

### 新增题型 / Adding a New Question Type

1. 在 `questions/` 下新建文件，如 `06-代码题.js`
2. 按格式写题目，末尾加 `window.registerQuestions('题型名', questions);`
3. 打开 `question-loader.js`，在 `QUESTION_FILES` 末尾加一行：
   ```javascript
   'questions/06-代码题.js'
   ```
4. 保存，刷新页面

---

## 🧠 题型对照 / Question Type Reference

| 题型 Type | 字段 Fields | 考试模式 Exam |
|-----------|------------|:-------------:|
| 选择题 / MC | `options`, `answer` | ✅ |
| 填空题 / Fill | `answer` | ✅ |
| 简答题 / Essay | `answer` | ✅ |
| 判断题 / T/F | `options: ["正确/True","错误/False"]`, `answer` | ✅ |
| 自定义 / Custom | 任意 `options` | ✅ |

---

## 🛠️ 技术栈 / Tech Stack

- **前端**：纯 HTML5 + CSS3 + JavaScript（ES5/ES6）
- **存储**：localStorage（错题本/统计数据保存在浏览器本地）
- **依赖**：无
- **Frontend**: Pure HTML5 + CSS3 + JavaScript
- **Storage**: localStorage (wrong book & stats saved locally)
- **Dependencies**: None

---

## 📁 文件结构 / File Structure

```
exam-skeleton/
├── index.html                  # 主界面（含完整 i18n 中英双语）
├── question-loader.js          # 题库加载器（支持中英双语字段）
├── README.md                   # 使用说明（中英双语）
└── questions/                  # 题库目录
    ├── 01-选择题.js              # 选择题 / Multiple Choice
    ├── 02-填空题.js              # 填空题 / Fill-in-the-blank
    ├── 03-简答题.js              # 简答题 / Essay
    ├── 04-判断题.js              # 判断题 / True or False
    └── 05-自定义题.js            # 自定义 / Custom
```

---

## 📝 License

MIT — 随意使用、修改、分享 / Free to use, modify, share
