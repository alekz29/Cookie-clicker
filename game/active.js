import manufacturers from "./manufacturers";

const active = (stateCookies) => {

    manufacturers.map(item => {

        if ((item.price || item.basicPrice) <= stateCookies) {
            const product = document.getElementById(`product${item.id}`)
            product.classList.remove('locked')
        }
        else {
            const product = document.getElementById(`product${item.id}`)
            product.classList.add('locked')
        }
    })
}

export default active