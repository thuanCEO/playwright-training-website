// cucumber.config.ts

export default {
  paths: ['src/features/**/*.feature'],
  require: [
    'src/step-definitions/**/*.ts',
    'src/support/hooks.ts',
    'src/world/PageWorld.ts'
  ],
  requireModule: ['ts-node/register'],
  format: ['html:reports/report.html', 'progress'],
  publishQuiet: true,
  worldParameters: {
    env: 'staging'
  }
};
