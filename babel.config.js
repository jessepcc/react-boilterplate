module.exports = {
  presets: [
    [['@babel/preset-env', { targets: { node: 'current' } }]],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^@(.+)': './src/\\1',
        },
      },
    ],
  ],
};
