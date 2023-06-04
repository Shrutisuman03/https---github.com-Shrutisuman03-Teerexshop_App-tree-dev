import { Component } from '@angular/core';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teerexshop';
  constructor(private listsService: ListsService){
    
  }
  ngOnInit(){
    console.log("app componennt ts this data is comming from list services from carlist.ts",this.listsService.getcartdetails());  
  }
}
