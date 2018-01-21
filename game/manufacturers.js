const Manufacturers = (() => {

    const list = [];

    function CreateObject() {
        this.createObject = () => {
            return {
                id: this.id,
                name: this.name,
                basicPrice: this.basicPrice,
                img: this.img,
                basisProduction: this.basisProduction,
                owned: this.owned,
                produces: this.produces,
                price:this.price

            }
        }
    }

    function CreateManufacturer() {
        this.create = (id, name, basicPrice, img, basisProduction, owned=0, produces=0,price=0) => {

            const nO = new CreateObject();

            nO.id = id;
            nO.name = name;
            nO.basicPrice = basicPrice;
            nO.img = img;
            nO.basisProduction = basisProduction;
            nO.owned = owned;
            nO.produces = produces;
            nO.price=price

            list.push(nO.createObject())
        }
    }

    const nF = new CreateManufacturer()
    nF.create(1, "Kursor", 15, './img/Kursor.png', 0.1)
    nF.create(2, "Babcia", 100, './img/Grandma.png', 1)
    nF.create(3, "Farma", 1100, './img/Farm.png', 8)
    nF.create(4, "Kopalnia", 1200, './img/Mine.png', 47)
    nF.create(5, "Fabryka", 13000, './img/factory.png', 260)


    return list

})()

export default Manufacturers

