class Draw {


    drawNewManufacturers(img, name, price, produces, owned) {
        return `<img class="mimg" src=${img}>
                <div>${name}</div>
                <div><img class="iconCookie" src='./img/Cookie.png'>${price}</div>
                <div>${produces}</div>
                <div class="owned">${owned}</div>`

    }

    drawBegin(manufacturers, container) {

        let tpl = `<div class="containerM">`;

        manufacturers.forEach((item) => {
            tpl += `
            <div data-manufacturer="${item.id}" class="manufacturer">
                ${this.drawNewManufacturers(item.img, item.name, item.basicPrice, item.produces, item.owned)}
            </div>`

        })

        tpl += `</div>`;

        container.insertAdjacentHTML('afterbegin', tpl)
    }


}

export default Draw
