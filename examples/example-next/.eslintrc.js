module.exports = {
  extends: ["next/babel", "next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
    "jsx-a11y/alt-text": "error",
  },
};
