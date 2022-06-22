const Item = require('./item.js');
class Legendary extends Item{

    Quality() {
        return  {quality:this.quality,sellIn:this.sellIn};;
    }
}
module.exports =Legendary;