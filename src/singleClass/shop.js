
class Shop {

    #legendaryItem = ['Sulfuras, Hand of Ragnaros'];
    #specialsItem = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'];
    #conjured = ['Conjured Mana Cake'];
    #qualityLimit = 50;

    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        let quality, sellIn;
        for (let i = 0; i < this.items.length; i++) {

            let item = this.items[i];
          
            if (this.items[i].name === this.#specialsItem[0]) {
                item = this.BrieQuality(this.items[i]);  }
            else if (this.items[i].name === this.#specialsItem[1]) {
                item = this.BackStageQuality(this.items[i]);
            }
            else if (this.items[i].name === this.#conjured[0]) {
                item = this.ConjuredQuality(this.items[i]);
            } else if (this.items[i].name !== this.#legendaryItem[0]) {
                item = this.NormalQuality(this.items[i]);
            }
            this.items[i].sellIn = item.sellIn;
            this.items[i].quality = item.quality;

        }

        return this.items;
    }
    BrieQuality(item) {
        item.sellIn -= 1;
        if (item.quality < this.#qualityLimit) {
        if(item.sellIn < 0){
            item.quality += 2;
            return item;
        }else{
            item.quality += 1;
        }
        }
        return item;
    }

    BackStageQuality(item) {
        let updateQuality = item.quality;
        item.sellIn -= 1;
        if (item.sellIn < 0) {
            item.quality = 0;
            return item;
        }
        if (item.quality < 50&&item.quality>=0) {
          
                updateQuality += 1;
            if(updateQuality<50&&updateQuality>0){
                if (item.sellIn >= 6 && item.sellIn < 11) {
                    updateQuality += 1;
                }
                else if (item.sellIn < 6) {
                    updateQuality += 2;
                }
            }    
        }
        item.quality = updateQuality;
        return item;
    }
    NormalQuality(item) {
        item.sellIn -= 1;
        if (item.quality > 0) {
            item.quality -= 1;
        }
        return item;
    }
    ConjuredQuality(item) {
        item.sellIn -= 1;
        if (item.quality > 0) {
            item.quality -= 2;
        }
        return item;
    }
    
}
module.exports = Shop;