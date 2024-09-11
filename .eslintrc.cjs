module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@next/next/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
};
