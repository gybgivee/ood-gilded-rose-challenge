const Item = require('./item.js');
class Normal extends Item{
    Quality() {
        this.sellIn -= 1;
        if (this.quality > 0) {
            this.quality -= 1;
        }
        return  {quality:this.quality,sellIn:this.sellIn};
    }
}
module.exports =Normal;