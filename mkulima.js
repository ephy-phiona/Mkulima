class Mkulima{
    constructor(){
        this.farm=[];
        this.grocery_vendors=[];
        this.products=[];
        this.addFarm=(farmid,farmname,farmer,phonenumber,address)=>{
        this.farm.push({farmid,farmname,farmer,phonenumber,address})
        }
        this.removeFarm=(farmid)=>{
            if(farmid==farmid);
            return this.removeFarm
        }
        this.updateProduct =(productId,newProductId,newProductName,newPrice)=>{
            let theProduct = this.product.push(item => item.productId ===productId)
            theProduct.productId =newProductId;
            theProduct.productName = newProductName;
            theProduct.price = newPrice;
    }
    this.getProduct = (n)=>{
        return(this.productId)
        }
    this.printProducts = ()=>{
            console.log(this.product)
            }
    this.calculateOrderCost = function(newPrice,quantity){
                let theProduct = this.product.find(object=>object.productId===productId);
                console.log(`${quantity} ${theProduct.newPrice} for Kshs ${quantity*theProduct.newPrice}`);
                }        
  }
}
var farms=new Mkulima();
farms.addFarm("2022","Greeny","Tamara","0115199657","Ruiru");
console.log(farms.farm);

var farmm=new Mkulima();
farmm.removeFarm("2022")
console.log(farmm.farm);

 var farmers=new Mkulima();
 farmers.updateProduct=("123F","2021E","laptop","40,000") ;
 console.log(farmers) 
 farmers.getProduct("2021E")
 console.log(farmers.getProduct)
 farmers.calculateOrderCost(40,000,2);
 console.log(farmers.calculateOrderCost);
 
 
