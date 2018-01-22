const count = (() => {
    const decimal = (a) => {
        const factor = Math.pow(10, 3);
        a = Math.round(Math.round(a * factor) / 10);
        return a / (factor / 10);
    }
    const sumUp = (...a) => {
        let sum = a.reduce((a, b) => a + b)
        Array.isArray(sum) ? sum = sum.reduce((a, b) => a + b) : null
        return sum
    }

    const producesForSec = (mLP) => {
        return sumUp(mLP.map(item => item.produces))
    }
    const subtract = (a, b) => {
        return a - b
    }

    return {
        sumUp,
        decimal,
        producesForSec,
        subtract
    }
})()


export default count