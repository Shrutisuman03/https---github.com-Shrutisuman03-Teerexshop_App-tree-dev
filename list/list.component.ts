import { Component,SimpleChanges } from '@angular/core';
import{ListsService } from'../lists.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListsService]
})
  export class ListComponent {
  mainContent:Boolean = true;
  products: any[] =[];
  parenttesting : string = "worktesting";
  getsecprice: number;
  getgender: string;
  getcolors: string;
  gettype: string;

 cartDetails: any[] = [];

  onProductSetting(cartDetails: any[]) {
   
    this.cartDetails = cartDetails;
    if(this.cartDetails.length >= 2){
      this.mainContent = false;
    }
    console.log("this is in list compent and data is coming from tshirt comp",this.cartDetails);
  }
  
  constructor(private listsService: ListsService){
     this.getsecprice=0;
     this.getgender="";
     this.getcolors="";
     this.gettype ="";
    
  }
  searchboxfield(inputfield:string)
  {
   console.log("search type filer here list component"+inputfield);
  }
   async common_fun_both_gendataand_priceselectdata( data: { price: number, gen: string, color:string,type:string} ){
      this.getgender=data.gen;
      this.getcolors = data.color;
      this.getsecprice = data.price;
      this.gettype = data.type;
      this.products = [];

 const storeresponse = await this.listsService.getproductdetails()
 storeresponse.forEach((product:any)=>{
  if(product.gender === data.gen){
    this.products.push(product);
    console.log("product name+product+id + product price+product gender=>>>>"+product.id, product.price, product.gender)
  }
  else if(product.color === data.color){
    this.products.push(product);
    console.log("product in color=>>>"+data.color);
  }
  else if(product.type === data.type){
    this.products.push(product);
    console.log("product in type=>>>"+data.type);
  }
  else if(product.price === data.price){
    this.products.push(product);
    console.log("product in pricess=>>>"+data.price);
  }
  
  // console.log("product name+product+id + product price=>>>>"+product.name, product.price, product.id)
 })


    // this.listsService.getproductdetails().subscribe((res)=>{
    //   console.log(res);
    //      res.forEach((product)=>{
          
          
    //         if(product.gender==data.gen){
    //         console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //         console.log("check the product is wokoing 35 line"+product.gender)
    //           this.products.push(product);
    //         }
    //         else if(product.color==data.color){
    //          console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //           console.log("check the product is wokoing 35 line"+product.color);
    //          this.products.push(product);
    //         }
    //         else if(product.type==data.type){
    //          console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //           console.log("check the product is wokoing 35 line"+product.type);
    //          this.products.push(product);
    //         }
    //         else if(product.price==data.price){
    //         console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //         console.log("check the product is wokoing 35 line"+product.price);
    //         this.products.push(product);
    //         }
    //    //   this.products.forEach((product)=>{
    //       //   console.log("for each loop lime 63 "+product);
    //  })
          
    // }    
    
    //         console.log("getsecprice in ngonit"+this.getsecprice);
    
          
    //  })
    // })
      //   console.log("the product from api",this.products)
      //   console.log("data from filter component in list with two data "+ data.price);
      //   console.log("data from filter  gender component in list with two data "+ data.gen);
      //   console.log("data from filter  color filter component data check "+ data.color);
      //   console.log("data from filter  type of hoodies filter component data check "+ data.type);



}
    async ngOnInit() {

     const onres = await this.listsService.getproductdetails()
     console.log("this data from list component data by list services =>"+onres);


     onres.forEach((product:any)=>{
      this.products.push(product);
      console.log("for each loop id=>"+product.id)
      console.log("for each loop image=>"+product.imageURL)
      console.log("for each loop name=>"+product.name)
      console.log("for each loop type=>"+product.type)
      console.log("for each loop gender =>"+product.gender)
      console.log("for each loop currency =>"+product.currency)
      console.log("for each loop quantity =>"+product.quantity)
      console.log("for each loop price$$ =>"+product.price)
      
      
      
    }) 

    console.log("this is list compenent in 100 line"+ this.products);
      //   this.listsService.getproductdetails().subscribe((res)=>{
      //     console.log(res[0]);
      //      console.log(typeof res);
      //     res.forEach((product)=>{
      //      this.products.push(product);
              
      //     })
      //  })
    //  console.log("the product from api",this.products)
    console.log( " listcomponent se mein list service function ko check kr rhe hai"+this.listsService.getcartdetails())
    
  }



    ngOnChanges(changes: SimpleChanges){
      console.log("the function on changes called!!");
        }
// getpricedata(pricedata:number){
//   this.getsecprice = pricedata;
//   console.log("this is list comp pricedata"+pricedata);
// }

}