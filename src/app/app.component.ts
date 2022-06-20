import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.numberIncrease()
  }
  title = 'Assignment1';
  num100 :number = 100;
  list:Array<any> = [];
  numberIncrease(){
   for(let i = 1; i<=this.num100;i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log('FizzBuzz');
      this.list.push('FizzBuzz');
    }
    else if(i % 3 == 0){
      console.log('Fizz');
      this.list.push('Fizz');
    }
    else if(i % 5 == 0){
      console.log("Buzz");
      this.list.push('Buzz');
    }
    else{
      console.log(i);
      this.list.push(i);
    }
    
    }
   }

  }
 
