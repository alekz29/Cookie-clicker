const Forged = (function () {

    const list = [];

    function CObject() {
        this.cObject = () => {
            return {
                name: this.name,
                price: this.price,
                img: this.img,
                quantityCookies: this.quantityCookies
            }
        }
    }

    function CreateForged() {
        this.create = (name, price, img, quantityCookies) => {
            const nO = new CObject();
            nO.name = name;
            nO.price = price;
            nO.img = img;
            nO.quantityCookies = quantityCookies;
            list.push(nO.cObject())
        }
    }

    const nF = new CreateForged()
    nF.create(1, 2, 3, 4)
    nF.create(1, 2, 3, 4)

    
    return{
        list
    }
})()

export default Forged




