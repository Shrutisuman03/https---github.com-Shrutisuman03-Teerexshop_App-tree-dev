import { Component,Input } from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css'],
  providers: [ListsService]
})

export class CartlistComponent {
  @Input()inputData: any[]; 
constructor(private listsService: ListsService){
  this.inputData =[];
  
}
ngOnInit(){
  console.log("this data is comming from list services from carlist.ts",this.listsService.getcartdetails()); 
  this.listsService.getparentdata().subscribe(data =>console.log("this is comming from list sevirece to cart.ts",data)); 
}
cartdetailshow(){

}

}
