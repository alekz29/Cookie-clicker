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
        Array.isArray(sum)? sum = sumUp(sum): null
        return sum
    }

    const producesForSec = (mLP) => {
        const v = mLP.map(item => item.produces)
        const x = countCookies(v)

        //   console.log(v)
        //   console.log(x)

    }

    return {
        countCookies,
        decimal,
        producesForSec
    }
})()


export default Count