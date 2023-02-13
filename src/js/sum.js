// ...args是es6中的rest参数，取代了arguments参数
export default function sum(...args) {
    return args.reduce((p, c) => p + c, 0)
}