module.exports = {
  presets: ["@babel/env"],
  plugins:
    process.env.NODE_ENV === "product"
      ? ["transform-remove-console", "@babel/plugin-transform-runtime"]
      : ["@babel/plugin-transform-runtime"],
  ignore: [],
};
