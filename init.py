import os
from string import Template

content = Template('
            {
        "env": {
            "browser": true,
            "commonjs": true,
            "es6": true,
            "jest": true
        },
        "parserOptions": {
            "ecmaFeatures": {
            "jsx": true
            },
            "sourceType": "module"
        },
        "rules": {
            "no-const-assign": "warn",
            "no-this-before-super": "warn",
            "no-undef": "warn",
            "no-continue": "off",
            "no-unreachable": "warn",
            "no-unused-vars": "warn",
            "constructor-super": "warn",
            "valid-typeof": "warn",
            "quotes": [
            2,
            "single"
            ],
            "semi": [
            "error",
            "never"
            ]
        },
        "parser": "babel-eslint",
        "extends": "airbnb",
        "plugins": [
            "react",
            "jsx-a11y",
            "import"
        ]
        }
')

def init_env():
    os.system("npm install electron")
    os.system("npm install --save-dev electron-builder")
    os.system("npm install")
    os.system("touch .eslitrc.json")
    os.system()


if __name__ == "__main__":
    pass