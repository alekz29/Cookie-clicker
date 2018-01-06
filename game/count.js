const Count = (() => {

    const countCookies = (a, b) => a += b
    const decimal = (a) =>{
        const factor = Math.pow(10,3);
        a = Math.round(Math.round(a*factor)/10);
        return a/(factor/10);
    }

    return {
        countCookies,
        decimal
    }
})()


export default Count