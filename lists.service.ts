import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Apis} from './commonutils/APIs';
import{cartlistarr} from './cartproducti';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListsService {
startPrice: number ;
endPrice: number ;
gendersdatasel:string;
apisdata :any;
product:any[];
 buyproductarr:cartlistarr[];
private headerData = new BehaviorSubject<any[]>([]);
// colourfilters:string;
constructor(private http: HttpClient) { 
this.startPrice =0;
this.endPrice=0;
this.gendersdatasel="";
this.apisdata = new Apis(this.http);
this.product=[];
this.buyproductarr=[];

// this.colourfilters="";
  }
  // bus obj1;
  // obj1.fun();
  async getproductdetails(){
    console.log("this is line 22 list services=>"+this.apisdata.productdetails());
    const response =  await this.apisdata.productdetails()
    console.log("this is apidata folder listservices response"+ response);
      // console.log("this is list services apidata folder checking"+this.apisdata.getproducts())
      return response;
     // this.apisdata.getproductdetails().subscribe(()=>{
    //   console.log();
    // })
    
  }
  // updateprice(startingprice:number, endingprice:number){
  // this.startPrice=startingprice;
  // this.endPrice=endingprice;
  // }
  // getstartingpriceendprice(){
  //   return [this.startPrice,this.endPrice];
  // }
  // updategender(gendersdatas:string){
  //   this.gendersdatasel=gendersdatas;
  // }
  // updatecolor(colorfilter:string){
  // this.colourfilters = colorfilter;

  // }

  // getupdategenfun(){
  //   return this.gendersdatasel;
  // }
  // getupdatecolour(){
  //   return this.colourfilters;
  // }
  setBuyproduct(imageurl:any,names:string,prices:number){
    // var count =0;
  var index =this.buyproductarr.findIndex(element => element.name==names)
if(index!=-1){
let product = this.buyproductarr[index];
product.quantity +=1;
product.price+=prices;
this.buyproductarr.splice(index,1);
this.buyproductarr.push(product);
}
else{
this.buyproductarr.push({imageURL:imageurl,name:names,price:prices,quantity:1});

}
console.log("line no 74 in listservices", this.buyproductarr);
  }
  getcartdetails(){
    return this.buyproductarr;
  }
  getparentdata(){
    return this.headerData.asObservable();
  }
  setparentdata(data: any[]){
    this.headerData.next(data);
  }

}
