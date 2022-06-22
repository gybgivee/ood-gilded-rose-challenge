const Item = require('./item.js');
class Brie extends Item{
    #qualityLimit = 50;

    Quality() {
        this.sellIn -= 1;
        if (this.quality < this.#qualityLimit) {
        if(this.sellIn < 0){
            this.quality += 2;
        }else{
            this.quality += 1;
        }
        }
        return {quality:this.quality,sellIn:this.sellIn};
    }
}
module.exports =Brie;
