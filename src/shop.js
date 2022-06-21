
class Shop {

    #legendaryItem = ['Sulfuras, Hand of Ragnaros'];
    #specialsItem = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'];
    #conjured = ['Conjured Mana Cake'];

    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {

            /* *********************1 : Set quality************************* */
            this.items[i].quality = this.setQualityBeforeBBF(this.items[i]);

            /* *********************2 :update SellIn  ************************* */
            this.items[i].sellIn = this.updateSellIn(this.items[i]);

            /* *********************3 :set quality from sellIn condition ************************* */
            this.items[i].quality = this.setQualityAfterBBF(this.items[i]);

        }

        return this.items;
    }
    BrieQuality(quality) {

        let updateQuality = quality;

        if (quality < 50) {
            updateQuality += 1;
        }
        return updateQuality;
    }
   
    BackStageQuality(sellIn, quality) {
        //console.log('updateQuality ', sellIn, quality);
        let updateQuality = quality;
        if (quality < 50) {

            updateQuality += 1;
            if (updateQuality < 50) {
                if (sellIn >= 6 && sellIn < 11) {
                    updateQuality += 1;
                }
                else if (sellIn < 6) {

                    updateQuality += 2;

                }
            }

        }
        //console.log('updateQuality ', updateQuality);

        return updateQuality;

    }
    setQualityBeforeBBF(item) {
        let updateQuality = item.quality;

        //Brie
        if (item.name === this.#specialsItem[0]) {

            updateQuality = this.BrieQuality(item.quality);

        }//Backstage
        else if (item.name == this.#specialsItem[1]) {

            updateQuality = this.BackStageQuality(item.sellIn, item.quality);
        }
        else {
        
            //conjured item
            if (item.quality > 0) {
                if(item.name === this.#conjured[0]){
                    updateQuality = item.quality - 2;
                }
                //normal
                else if (item.name != this.#legendaryItem[0]) {
                    updateQuality = item.quality - 1;
                }
            }
        }
        return updateQuality;
    }
    setQualityAfterBBF(item) {

        //set quality after out of date
        let updateQuality = item.quality;

        if (item.sellIn < 0) {
           
            //Brie
            if (item.name === this.#specialsItem[0]) {
                updateQuality = this.BrieQuality(item.quality);
            } //Backstage passes
            else if (item.name === this.#specialsItem[1]) {
                updateQuality =  0;
            }
            else {

                if (item.quality > 0) {
                    //conjured item
                    if(item.name === this.#conjured[0]){
                        updateQuality = item.quality - 2;
                    }
                    //normal item
                    else if (item.name != this.#legendaryItem[0]) {
                        updateQuality = item.quality - 1;
                    }
                   
                }
            }
        }
        return updateQuality;
    }
    updateSellIn(item) {
        let updateSellIn = item.sellIn;
        //Every Item execpt #legendaryItem
        if (item.name != this.#legendaryItem[0]) {
            updateSellIn = item.sellIn - 1;
        }
        return updateSellIn;
    }
}
module.exports = Shop;