import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var FCMPlugin;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: any;
  constructor(public navCtrl: NavController) {
  
  }
  
  

}
