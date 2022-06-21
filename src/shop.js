
class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        const legendaryItem = ['Sulfuras, Hand of Ragnaros']
        const specialsItem = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']
        for (let i = 0; i < this.items.length; i++) {
            /* *********************1 : Set quality************************* */
            //Brie
            if (this.items[i].name === specialsItem[0]) {

                this.items[i].quality = this.BrieQuality(this.items[i].quality);

            }//Backstage
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
            //Every Item execpt legendaryItem
            if (this.items[i].name != legendaryItem[0]) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            /* *********************3 :set quality from sellIn condition ************************* */
            //set quality after out of date
            if (this.items[i].sellIn < 0) {
                  //Backstage passes
                  if(this.items[i].name === specialsItem[1]){
                    console.log('name ',this.items[i].name);
                    this.items[i].quality = this.items[i].quality - this.items[i].quality;
                  }
                  //Brie
                  else if (this.items[i].name === specialsItem[0]){
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                      }
                  }
                  //normal item
                  else{
                    
                      if (this.items[i].quality > 0) {
                        if (this.items[i].name != legendaryItem[0]) {
                          this.items[i].quality = this.items[i].quality - 1;
                        }
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
    setQualityBeforeBBF(item){
        const legendaryItem = ['Sulfuras, Hand of Ragnaros']
        const specialsItem = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']
         //Brie
         if (item.name === specialsItem[0]) {

            item.quality = this.BrieQuality(item.quality);

        }//Backstage
        else if (item.name == specialsItem[1]) {

            item.quality = this.BackStageQuality(item.sellIn, item.quality);
        }
        else {
            /*---------------------Set quality normal---------------------- */
            if (item.quality > 0) {
                if (item.name != legendaryItem[0]) {
                    item.quality = item.quality - 1;
                }
            }
        }
    }
}
module.exports = Shop;