import manufacturers from "./Manufacturers";

class Draw {
    draw(x) {
        const container = document.querySelector('.manufacturers')

        let tpl = `<ul>`;
        x.forEach((item) => {
            tpl += `
          <li>${item.name}</li>
          `

        })

        tpl += `</ul>`;

        console.log(tpl)

        container.insertAdjacentHTML('afterbegin', tpl)

    }
}

export default Draw