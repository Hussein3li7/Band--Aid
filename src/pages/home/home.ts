import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{StatePage} from '../state/state'
import{ObjectivesPage} from '../objectives/objectives'
import{PrinciplesPage}from '../principles/principles'
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goState(){
    this.navCtrl.push(StatePage)
  }


  goObjective(){
this.navCtrl.push(ObjectivesPage)
  }


  goPirciblse(){
    this.navCtrl.push(PrinciplesPage)
  }


  goAbout(){
    this.navCtrl.push(AboutPage)
  }

}
