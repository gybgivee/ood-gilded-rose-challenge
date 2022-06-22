
class NewShop {

    constructor(item = []) {
        this.items = item;
    }
    addItem(item) {
        this.items.push(item);
    }
    updateQuality() {

        let update;
        for (let i = 0; i < this.items.length; i++) {
            update = this.items[i].Quality();
            this.items[i].quality = update.quality;
            this.items[i].sellIn= update.sellIn;

        }
       
        return this.items;

    }
    getitems() {
        return this.items;
    }


}
module.exports = NewShop;



/*const Normal = require('./Normal');
const Item = require('./item');


const shop = new NewShop();
shop.addItem(new Normal("+5 Dexterity Vest", 10, 20));
console.log(shop.getitems());
shop.addItem(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
console.log(shop.getitems());
console.log('new shop ', shop.updateQuality());
  new Brie("Aged Brie", 2, 0),
  new Normal("Elixir of the Mongoose", 5, 7),
  new item("Sulfuras, Hand of Ragnaros", 0, 80),
  new item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Conjured("Conjured Mana Cake", 3, 6),*/