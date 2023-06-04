import { Component,Output,EventEmitter} from '@angular/core';
import{ListsService } from'../lists.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [ListsService]
})

export class FilterComponent {
  // @Output() selectprice = new EventEmitter<number,string,string>();
  // child to parent we can use @output 
  @Output() allEvent = new EventEmitter<{ price: number, gen: string,color:string,type:string}>();
  // @Output() genderselect = new EventEmitter<string>();
  // @Output() emitcolours = new EventEmitter<string>();
  firstpricerange: number;
  secpricerange: number;
  genderscategory:string;
  selectcolor:string;

 constructor(private listsService: ListsService){
  this.secpricerange = 0;
  this.firstpricerange = 0;
  this.genderscategory="";
  this.selectcolor ="";
 }

 markedprice(startingprice:number,endingprice:number){
  // this.firstpricerange=startingprice;
  // this.secpricerange=endingprice;
  console.log(this.secpricerange);
  // console.log(startingprice);
  // console.log(endingprice);
  // this.listsService.updateprice(startingprice,endingprice);
  // console.log(this.listsService.getstartingpriceendprice());
  // this.selectprice.emit(this.secpricerange);
  const data= {price: endingprice,gen:'',color:'',type:'string'}
  //.emit is a function that is used to pass data
  this.allEvent.emit(data);
 }
 genderfun(gendersdata:string){
  this.genderscategory=gendersdata;
  console.log(gendersdata);
  // this.listsService.updategender(gendersdata);
  // console.log(this.listsService.getupdategenfun());
  // this.genderselect.emit(this.genderscategory);
  const datagen = {price:0,gen:gendersdata,color:"",type:""}
  this.allEvent.emit(datagen);
  

 }
colorfun(colourfiltering:string){
this.selectcolor=colourfiltering;
// this.listsService.updatecolor(colourfiltering);
// console.log(this.listsService.getupdatecolour());
const datacolour = {price:0,gen:"",color:colourfiltering,type:""}
this.allEvent.emit(datacolour);
 }
 typesoftshirts(typeoftshirts:string){
  const datatypes = {price:0,gen:"",color:'',type:typeoftshirts}
this.allEvent.emit(datatypes);
 }

}
