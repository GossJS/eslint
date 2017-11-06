https://kodaktor.ru/g/eslint

здесь также используется простейшая настройка nodemon

и экспериментальный импорт/экспорт в стиле node 8.5.0 (осень 2017)

Настройка линтера для Atom:

https://www.youtube.com/watch?v=dEaUikT1-R0

https://github.com/verekia/js-stack-from-scratch/blob/master/tutorial/02-babel-es6-eslint-flow-jest-husky.md#eslint

   npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest
