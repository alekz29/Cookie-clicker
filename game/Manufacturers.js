const Manufacturers = (() => {

    const list = [];

    function CreateObject() {
        this.createObject = () => {
            return {
                name: this.name,
                price: this.price,
                img: this.img,
                quantityCookies: this.quantityCookies
            }
        }
    }

    function CreateManufacturer() {
        this.create = (name, price, img, quantityCookies) => {
            const nO = new CreateObject();
            nO.name = name;
            nO.price = price;
            nO.img = img;
            nO.quantityCookies = quantityCookies;
            list.push(nO.createObject())
        }
    }

    const nF = new CreateManufacturer()
    nF.create("Kursor", 15, '', 0.1)
    nF.create("Babcia", 100, '', 1)
    nF.create("Farma", 1100, '', 8)
    nF.create("Kopalnia", 1200, '', 47)
    nF.create("Fabryka", 13000, '', 260)


    return list

})()

export default Manufacturers

