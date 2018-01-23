const production = (() => {
    const speedInterval = (productCookies) => {
        if (productCookies < 1) {
            return 1000 * Math.pow(productCookies, -1)
        }
        else if (productCookies < 100) {
            return 1000 / productCookies
        }
        else if (productCookies >= 100) {
            return 10
        }
    }


    const cookiesInTime = (productCookies) => {

        if (productCookies < 100) {
            return 1
        }
        else if (productCookies >= 100) {
            return productCookies / 100
        }

    }
    return {
        speedInterval,
        cookiesInTime
    }

})()

export default production