/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    // 若项目用 Tailwind，保留下一行；不用就删掉它
    'stylelint-config-tailwindcss',
    // 放在最后，关闭与 Prettier 冲突的“格式化类”规则
    'stylelint-config-prettier',
  ],
  ignoreFiles: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
    '**/*.json',
    '**/*.{png,jpg,jpeg,gif,svg,webp,mp3,mp4}',
    'node_modules/**',
    'dist/**',
    'build/**',
    'coverage/**',
  ],
  rules: {
    // 允许 PostCSS/Tailwind 等自定义 at-rule
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // 常见 PostCSS/Tailwind at-rules；按需增减
          'tailwind',
          'apply',
          'layer',
          'screen',
          'responsive',
          'variants',
          // 如果你确实在用自定义的 'extends' / 'ignores'，保留；否则删掉
          'extends',
          'ignores',
        ],
      },
    ],

    // 与 Prettier 的 tabWidth 对齐（你若是 4，就改成 4）
    indentation: 2,

    // 单位白名单：去掉无效的 'all'，按需补充
    'unit-allowed-list': ['px', 'rem', 'em', '%', 'vh', 'vw', 'ms', 's', 'deg', 'fr', 'ch'],

    // 一些团队常用的语义规则
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-element-colon-notation': 'single',

    // 避免 CSS Modules / tooling 下的误报
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] },
    ],

    // 这条在真实项目里经常误报，关掉更省心
    'no-descending-specificity': null,

    // 建议交给 Prettier 处理的“排版类规则”就别在这里重复了
    // 例如这些都可以移除（交给 Prettier）： 
    // 'block-closing-brace-newline-after', 
    // 'declaration-block-semicolon-newline-after',
    // 'selector-list-comma-newline-after',
    // 'no-eol-whitespace' 等
  },
  // 更严格的禁用指令报告（可选；帮助发现无效的 // stylelint-disable）
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
};
