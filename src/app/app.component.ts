import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ofObservable = of(1,2,3,4,5,6,7,8,9);
  promise = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Resolved");
    }, 2000)
  })
  fromObservable = from('Helloworld');
  promiseObservable = from(this.promise);
  constructor(){
    this.ofObservable.subscribe((result:any)=>{
      console.log("Of operator data ", result)
    })
    this.fromObservable.subscribe((data:any)=>{
      console.log("From operator Data", data)
    })
    this.promiseObservable.subscribe((promiseValue:any)=>{
      console.log("Promise", promiseValue);
    })
  }
  
}
