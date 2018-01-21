class Draw {
    draw(manufacturers, container) {

        let tpl = `<div class="containerM">`;

        manufacturers.forEach((item) => {
            tpl += `
          <div data-manufacturer="${item.id}" class="manufacturer">
                <img class="mimg" src=${item.img}>
                <div>${item.name}</div>
                <div>${item.basicPrice}</div>
                <div>${item.produces}</div>
                <div class="owned">${item.owned}</div>
          
          </div>
          `
        })

        tpl += `</div>`;

        container.insertAdjacentHTML('afterbegin', tpl)
    }

}

export default Draw