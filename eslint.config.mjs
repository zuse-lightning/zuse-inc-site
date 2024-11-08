import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            sourceType: "module",
            globals: { ...globals.browser, ...globals.node },
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-react"],
                },
            },
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        extends: [
            "airbnb",
            "developit"
        ],
        rules: {
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    },
];