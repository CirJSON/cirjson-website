import { createConfigForNuxt } from "@nuxt/eslint-config/flat"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
})
  .prepend(eslintPluginPrettierRecommended)
  .overrideRules({
    curly: "error",

    "one-var": ["error", "never"],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/quotes": ["error", "double"],
  })
