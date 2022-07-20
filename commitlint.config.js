module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, 'never'],
    "type-enum": [2, 'always', ['feat', 'fix', 'perf', 'refactor', 'docs', 'style', 'test', 'build', 'revert', 'ci', 'chore', 'release']]
  }
};
