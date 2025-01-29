import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  showModel=false;
  selectedImage:string='';
  item(pathImage:string){
    this.selectedImage=pathImage;
    this.showModel=true;
  }
  closeModel(){
    this.showModel=false
  }

}
