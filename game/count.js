const Count = (() => {
    const decimal = (a) => {
        const factor = Math.pow(10, 2);
        a = Math.round(Math.round(a * factor) / 10);
        return a / (factor / 10);
    }
    const sumUp = (a) => {
        return a.reduce((a, b) => a + b)
    }
    const countCookies = (...a) => {
        let sum = sumUp(a)
        Array.isArray(sum) ? sum = sumUp(sum) : null
        return sum
    }

    const producesForSec = (mLP) => {
        return countCookies(mLP.map(item => item.produces))
    }
    const subtract = (a, b) => {
        return a - b
    }

    return {
        countCookies,
        decimal,
        producesForSec,
        sumUp,
        subtract
    }
})()


export default Count