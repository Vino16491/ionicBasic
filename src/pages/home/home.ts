import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  temp = {
    celsius: null,
    fahrenheit: null
  }
  constructor(public navCtrl: NavController) {

  }
  tempConvertFahrenheit() {
    // this.temp.fahrenheit = this.temp.celsius;
    if(this.temp.celsius != null){
      this.temp.fahrenheit = ((this.temp.celsius) * 9/5) + 32 + ' °F'
    }
    if(this.temp.celsius === ''){
      this.temp.fahrenheit = ''
    }
  }
  tempConvertCelsius(){
    if(this.temp.fahrenheit != null){
      this.temp.celsius = ((this.temp.fahrenheit) - 32) * 5/9 + ' °C'
    }

    if(this.temp.fahrenheit === ''){
      this.temp.celsius = ''
    }
  }

}
