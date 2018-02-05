class Draw {


    drawNewManufacturers(img, name, price, produces, owned) {
        return `<img class="mImg" src=${img}>
                <div class="mHeader">
                    <div class="mName">${name}</div>
                    <div class="price"><img class="iconCookie" src='./img/Cookie.png'>${price}</div>
                </div>
                <div class="produces">${produces}</div>
                <div class="owned">${owned}</div>`

    }

    drawBegin(manufacturers, container) {

        let tpl = `<div class="containerM">`;

        manufacturers.forEach((item) => {
            tpl += `
            <div id="product${item.id}" class="excluded locked manufacturer">
                ${this.drawNewManufacturers(item.img, '???', item.basicPrice, item.produces, item.owned)}
            </div>`

        })

        tpl += `</div>`;

        container.insertAdjacentHTML('afterbegin', tpl)
    }


}

export default Draw
