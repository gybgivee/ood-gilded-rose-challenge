const Item = require('./item.js');
class Conjured extends Item{

    Quality() {
        this.sellIn -= 1;
        if (this.quality > 0) {
            this.quality -= 2;
        }
        return  {quality:this.quality,sellIn:this.sellIn};;
    }
}
module.exports =Conjured;