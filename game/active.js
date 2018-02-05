import manufacturers from "./manufacturers";

const active = cookies => {

    manufacturers.map(item => {

        const product = document.getElementById(`product${item.id}`),
            currentPrice = (item.price || item.basicPrice)

        if (currentPrice <= cookies && product.classList.contains('locked')) {
            product.classList.remove('locked')
            console.log('asdas')
        }
        else if (currentPrice > cookies && product.classList.contains('locked') === false) {
            product.classList.add('locked')
        }
        if ((currentPrice * 0.9) <= cookies && product.classList.contains('excluded')) {
            product.classList.remove('excluded')
            product.querySelector('.mName').innerText = `${item.name}`

        }

    })
}

export default active