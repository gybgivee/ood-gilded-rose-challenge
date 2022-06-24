const Item = require('./item.js');
class Legendary extends Item{

    getQuality() {
        return  {quality:this.quality,sellIn:this.sellIn};;
    }
}
module.exports =Legendary;