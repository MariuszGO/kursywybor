import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';    
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})

export class AppComponent {

  ang = false;
  js = false;
  sum:number=0;
  angular:number = 5000;
  javascript:number = 3000;
  ilosc_rat:number=0;
  miasto:string="";
 
  cena_raty():number{
    if(this.ilosc_rat>0){

    return this.suma()/this.ilosc_rat;

    } 

    return this.suma();
  }



suma(): number 
{
  this.sum = 0;
 

    if (this.ang == true && this.js == true) 
      {
      this.sum=this.angular+this.javascript;
      return this.sum;
      } 
      else if (this.ang == true) 
          {
           this.sum=this.angular;
           return this.sum;
          } 
          else if (this.js == true) 
            {
             this.sum=this.javascript;
             return this.sum;
            }
            else
            {
              this.sum=0;
              return this.sum;
            }

}

}
