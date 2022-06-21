
class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        const legendaryItem = ['Sulfuras, Hand of Ragnaros']
        const specialsItem = [ 'Aged Brie','Backstage passes to a TAFKAL80ETC concert']
        for (let i = 0; i < this.items.length; i++) {
            /* *********************1 : Set quality************************* */
            /*---------------------Set quality Back Stage & AgeBrie---------------------- */
            if (this.items[i].name === specialsItem[0]) {

                this.items[i].quality = this.BrieQuality(this.items[i].quality);

            }
            else if (this.items[i].name == specialsItem[1]) {

                this.items[i].quality = this.BackStageQuality(this.items[i].sellIn, this.items[i].quality);
            }
            else {
                /*---------------------Set quality normal---------------------- */
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != legendaryItem[0]) {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }

    
            }
            /* *********************2 :update SellIn  ************************* */
            if (this.items[i].name != legendaryItem[0]) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            /* *********************3 :set quality from sellIn condition ************************* */
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != legendaryItem[0]) {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
            }
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
        console.log('updateQuality ', sellIn, quality);
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
        console.log('updateQuality ', updateQuality);

        return updateQuality;

    }
}
module.exports = Shop;