module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],
    require: [
      "src/step-definitions/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "allure-cucumberjs/reporter",
      "progress"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    }
  }
};