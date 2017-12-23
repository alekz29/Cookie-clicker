import manufacturers from './manufacturers'
import Draw from './draw'


const startGame = (() => {
    const result = document.querySelector(".result")
    const cookie = document.querySelector(".cookie-ground__big-cookie")
    const container = document.querySelector('.manufacturers')
    const d = new Draw()
    d.draw(manufacturers, container)

    const state = {
        productCookies: 2,
        cookies: 0,
    }
    const count = () => {
        state.cookies += state.productCookies
    }
    cookie.addEventListener('click', () => {
        state.cookies += 1;
        result.innerHTML = state.cookies
    })


    setInterval(() => {
       count()
        result.innerHTML = state.cookies
    }, 1000)

    container.querySelectorAll('li').forEach((item) => {
        item.addEventListener('click', (e) => {
            setSum(e.target)
        })
    })
    const setSum = (element) => {
        //  console.log(element.getAttribute('data-manufa'))
        state.productCookies += 1
        console.log(state.productCookies)
    }

})()