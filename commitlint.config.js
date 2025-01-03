export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // Error level
      'always', // Always apply this rule
      ['feat', 'fix', 'docs', 'style', 'refactor', 'chore'], // Only allow these types
    ],
    'subject-case': [2, 'never', ['sentence-case']], // Prevent the subject from being sentence case
  },
};
