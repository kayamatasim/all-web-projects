import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible=true;
  counter:number=0;
  changeithere(da:any){
      da==='inc'?this.counter++:this.counter--;
      console.log(da)
  }
  title = 'its working';

}
