
import { Component } from '@angular/core';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html'

})

export class AppComponent {


  options = {

type: 'line',

title: 'Sales Report',

series: [

{ name: 'Offline', value: 30, color: 'red' },

{ name: 'Online', value: 70, color: 'blue' },

{ name: 'Store', value: 50, color: 'green' }

]

};

}