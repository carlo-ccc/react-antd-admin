
export default module.exports = {
  printWidth: 100,
  // 每行最大字符数。100 兼顾可读性和更少的换行，适合 TSX。

  tabWidth: 2,
  // React/TSX 社区更常用 2 空格，减少嵌套时的横向滚动。

  useTabs: false,
  // 统一使用空格缩进，避免不同编辑器对 Tab 的展示差异。

  semi: true,
  // 以分号结尾，避免某些 ASI（自动插入分号）边界导致的潜在问题。

  singleQuote: true,
  // JS/TS/JSON 中优先单引号，统一风格。

  jsxSingleQuote: false,
  // 在 JSX 中仍使用双引号，更贴近 HTML 生态与工具链默认。

  trailingComma: 'all',
  // 末尾逗号全开：新增/删除行的 Git diff 更干净，减少上一行被改动。

  bracketSpacing: true,
  // 对象字面量大括号两侧留空格：{ foo: bar } 更易读。

  bracketSameLine: false,
  // JSX 的结束 `>` 另起一行，更清晰（取代旧的 jsxBracketSameLine）。

  arrowParens: 'always',
  // 箭头函数始终带括号：重构/添加类型时更稳、更少歧义。

  proseWrap: 'preserve',
  // Markdown 文本按源文件决定换行，避免和文档作者习惯冲突。

  endOfLine: 'lf',
  // 统一为 LF，避免跨平台（Windows/macOS/Linux）换行符混乱。
};
