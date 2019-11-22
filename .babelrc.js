const presets = [
  [
    '@babel/preset-env',
    {
      // corejs: {
      //   versions: '3',
      //   proposals: true
      // },
      corejs: '3',
      useBuiltIns: 'usage',
      modules: false,
      // loose: true,
      debug: process.env.NODE_ENV !== 'production',
      include: [],
      exclude: []
      // targets: {
      //   node: 'current',
      //   browsers: [
      //     'last 2 versions',
      //     'ie >= 7',
      //     'android >= 4.0',
      //     'safari >= 9',
      //     '> 1%'
      //   ]
      // }
    }
  ],
  // '@nuxt/babel-preset-app'
]
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-runtime',
  '@babel/plugin-transform-exponentiation-operator',
  // "transform-remove-console",
  [
    'import',
    {
      libraryName: 'iview-design',
      libraryDirectory: 'src/components'
    }
  ]
]

module.exports = {
  presets,
  plugins
}
