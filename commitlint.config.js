module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'feat',
        'fix',
        'refactor',
        'style',
        'test',
        'config',
        'docs',
      ],
    ],
  },
}
