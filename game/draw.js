
class Draw {
    draw(manufacturers,container) {

        let tpl = `<ul>`;
        manufacturers.forEach((item) => {
            tpl += `
          <li data-manufa="${item.id}">${item.name}</li>
          `

        })

        tpl += `</ul>`;

        container.insertAdjacentHTML('afterbegin', tpl)
    }

}

export default Draw