import { HttpClient } from "@angular/common/http";
import { interval, take, lastValueFrom } from 'rxjs';
import{productlists} from '../producti'


export class Apis{
  products : productlists[]
    constructor( private http: HttpClient){
      this.products =[];  
    }
    // tight coupling 
    
   async productdetails(){
        // return this.http.get<any[]>("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
  try{
       const res = await lastValueFrom(this.http.get<any[]>("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"))
       console.log("Apis to res"+res[0].color);
  // res.forEach((product)=>{
  //   this.products.push(product);
    // console.log("for each loop id=>"+product.id)
    // console.log("for each loop image=>"+product.imageURL)
    // console.log("for each loop name=>"+product.name)
    // console.log("for each loop type=>"+product.type)
    // console.log("for each loop gender =>"+product.gender)
    // console.log("for each loop currency =>"+product.currency)
    // console.log("for each loop quantity =>"+product.quantity)
    // console.log("for each loop price$$ =>"+product.price)
    
    
  // })
  // return this.products;
  return res;
}

catch (err:any) {
  console.log("this error comes form APIS ts file")
  return err;
}
      
}
getproducts(){
  return this.products;
}


}