module.exports = {
    "env": {
        "es6":  true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "globals": {
        "document": true,
        "window":   true,
        "THREE":    true,
        "Stats":    true,
        "signals":  true,
        "UI":       true,
        "Viewport": true,
        "APP3D":    true
    },
    "rules": {
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-mixed-spaces-and-tabs": "off",
        "no-case-declarations": "off",
        "space-before-function-paren": [ "error", "never" ],
        "func-call-spacing": [ "error", "never" ],
        "no-console": "off",
        "no-useless-escape": "off",
        "no-fallthrough": "off",
        "keyword-spacing": "error",
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "next|resp|reject"
            }
        ],
        "key-spacing": [
            "error", {
                "mode": "minimum"
            }
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            {
                "before":   false,
                "after":    true
            }
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        "brace-style": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "space-before-blocks": [
            "error"
        ],
        "arrow-spacing": [
            "error"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "curly": [
            "error",
            "all"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ]
    }
};
