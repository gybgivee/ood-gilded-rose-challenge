const Item = require('./item.js');
class Backstage extends Item{
    #qualityLimit = 50;

    Quality() {
        let updateQuality = this.quality;
        this.sellIn -= 1;

        if (this.sellIn < 0) {
            this.quality = 0;
            return  {quality:this.quality,sellIn:this.sellIn};;
        }
        if (this.quality < this.#qualityLimit
            &&  this.quality>=0) {
          
                updateQuality += 1;

            if(updateQuality < this.#qualityLimit
                &&  updateQuality > 0){

                if (this.sellIn >= 6 
                    && this.sellIn < 11) {

                    updateQuality += 1;
                }
                else if (this.sellIn < 6) {
                    updateQuality += 2;
                }
            }    
        }
        this.quality = updateQuality;
        
        return  {quality:this.quality,sellIn:this.sellIn};;
    }
}
module.exports =Backstage;