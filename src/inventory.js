class Inventory{
    #inventory
    constructor(inventory=[]){
        this.#inventory = inventory;
    }
    getInventory(){
            return this.#inventory.map(element => {
                return {
                    
                    name: element.name,
                    sellIn: element.sellIn,
                    quality:element.quality,
                }
            })
        }
 }
 module.exports = Inventory;
