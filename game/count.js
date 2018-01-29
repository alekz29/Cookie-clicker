import production from "./production";

const count = (() => {
    const decimal = (a,pow=1) => {
        const factor = Math.pow(10, pow);
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
    const wealth = (state,result,productCookies) => {
        state += count.decimal(production.cookiesInTime(productCookies))
        result.innerHTML = state
        return state
    }


    return {
        sumUp,
        decimal,
        producesForSec,
        subtract,
        wealth
    }
})()


export default count