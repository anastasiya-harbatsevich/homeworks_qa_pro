var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    getPriceArray : function(){
        let values = Object.values(services);
        let priceNumber = [];
        for (let  i = 0; i < values.length; i++){
           if (typeof values[i] === "string"){
            priceNumber.push(values[i].replace(' грн', ''));
           }
        }
        return priceNumber.map(Number);
    },
    price : function(){
        let sum = 0;
        let priceNumberArray = this.getPriceArray();
        for(let i = 0; i < priceNumberArray.length; i++){
            sum = sum + priceNumberArray[i];
        }
        return sum;
    },
    minPrice : function(){
        let priceNumberArray = this.getPriceArray();
        let minPrice = priceNumberArray[0];
        for (let i = 0; i < priceNumberArray.length; i++){
            if (minPrice > priceNumberArray[i]) {
                minPrice = priceNumberArray[i]
            }
        }
        return minPrice;
    },
    maxPrice : function(){
        let priceNumberArray = this.getPriceArray();
        let maxPrice = priceNumberArray[0];
        for (let i = 0; i < priceNumberArray.length; i++){
            if (maxPrice < priceNumberArray[i]) {
                maxPrice = priceNumberArray[i]
            }
        }
        return maxPrice;
    }
};
services['Розбити скло'] = "200 грн";
services['Розбити5545'] = "-4 грн";
services['Розбити'] = "20 грн";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());