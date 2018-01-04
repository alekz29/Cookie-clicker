const Manufacturers = (() => {

    const list = [];

    function CreateObject() {
        this.createObject = () => {
            return {
                id:this.id,
                name: this.name,
                price: this.price,
                img: this.img,
                quantityCookies: this.quantityCookies,
                sum:this.sum

            }
        }
    }

    function CreateManufacturer() {
        this.create = (id,name, price, img, quantityCookies,sum) => {
            const nO = new CreateObject();
            nO.id = id;
            nO.name = name;
            nO.price = price;
            nO.img = img;
            nO.quantityCookies = quantityCookies;
            nO.sum = sum;

            list.push(nO.createObject())
        }
    }

    const nF = new CreateManufacturer()
    nF.create(1,"Kursor", 15, './img/Kursor.png', 0.1,0)
    nF.create(2,"Babcia", 100, './img/Grandma.png', 1,0)
    nF.create(3,"Farma", 1100, './img/Farm.png', 8,0)
    nF.create(4,"Kopalnia", 1200, './img/Mine.png', 47,0)
    nF.create(5,"Fabryka", 13000, './img/factory.png', 260,0)


    return list

})()

export default Manufacturers

