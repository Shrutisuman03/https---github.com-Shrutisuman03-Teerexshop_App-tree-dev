import { Component,Input,OnChanges,SimpleChanges,EventEmitter,Output} from '@angular/core';
import{ListsService } from'../lists.service';

@Component({

  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css'],
  providers: [ListsService]
})
export class TshirtsComponent {
  products: any[] =[];
  // collect :any[]=[];
 //@Input() childtesting = "";
 // parent to child data we will use @input
 @Input() products1: any[]=[];
 @Output() productset:any[]=[];
 startpricevalue: number;
 endpricevalue: number;
 @Output()productsetting = new EventEmitter<any[]>();
 @Output()searchboxEvent = new EventEmitter<any>();
//  Searchitems: string;
Searchitems
 
 

constructor(private listsService: ListsService){
 this.startpricevalue=0;
 this.endpricevalue=0;
 this.Searchitems="";
 }
 search(){
  console.log("my check:",this.Searchitems)
}   
  
  ngOnInit() {
   
    this.products = this.products1[0];
  
  console.log("this products11 array", this.products1[0]);
  
    console.log("the product from api",this.products)
    this.listsService.getparentdata().subscribe(data =>console.log("this is ng onint tshirt component from list sevirece to ",data)); 
    
  
  }
  addfunction(){

  }
  // searchpdts :string
  serachproductsinbox(){
    // const datasearch ='Men';
    // console.log("this is t shirt file searchbox attributs=>>"+searchpdts);
   console.log("ye tshrits wlae  serach products"+ this.Searchitems);
    this.searchboxEvent.emit(this.Searchitems);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('MyComponent: ngOnChanges', changes);
  console.log('MyComponent: ngOnChanges navigation=', changes['products1'].currentValue[0]);
  this.products = changes['products1'].currentValue[0];

  }
  cartitems(imageurl :any,nameofts:any,prices:number){
    console.log("ts file filter cartitems all")
    console.log("ye price ts wala check kr rhe",imageurl,nameofts,prices)
    this.productsetting.emit(this.listsService.getcartdetails())
   this.listsService.setBuyproduct(imageurl,nameofts,prices)
   console.log("cartdetails list wala tshirt ts m ",this.listsService.getcartdetails())
   this.listsService.setparentdata(this.listsService.getcartdetails());
  }

}

