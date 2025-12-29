import { Component, signal, Signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface employeface {
  id: number,
  name: string,
  brach: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;
  title = 'angular19Prod';
  a = 5;
  b = 6;
  ans = this.a + this.b;
  inpval: number = 0
  isdisable: boolean = false
  display(msg: string) {
    console.log(msg, "msg")
    alert(msg)
  }
  inputvalue: number = 1
  counter(type: string) {
    type === 'add' ? this.inputvalue++ : this.inputvalue--
    // if(type=="add"){
    // this.inputvalue++
    // }else{
    // this.inputvalue--
    // }
  }
  isShift(event: KeyboardEvent) {
    console.log(event, "11111111111")
    if (event.key == 'ArrowUp') {
      this.inpval++
    } else if (event.key == 'Arrowdown') {
      this.inpval--
    }
  }

  price: number = 0
  priceper = 100
  // totalprice:string=''
  get totalprice(): number {
    return this.price * this.priceper
  }

  num = 11
  showelm: boolean = true


  forloppArray = [
    {
      id: 1,
      name: "sayali"
    },
    {
      id: 2,
      name: "viniit"
    },
    {
      id: 3,
      name: "chetuk"
    },
  ]

  nestedFor = [
    // [1, 2, 3],
    // [4, 5, 6],
    // [7, 8, 9],
  ]

  employee = signal<employeface[]>([
    { id: 1, name: "sayali", brach: "civil" },
    { id: 2, name: "vinit", brach: "mech" },
    { id: 3, name: "nikhil", brach: "civil" }
  ])

  // nhSwitchd
  age = 60
  controlNgswitch: string = ''
  // ngclass
  hstext: any = ''
  checkemptyinp(e: any) {
    if (e.target.value == '') {
      this.hstext = ''
    } else {
      this.hstext = 'inp'
    }
  }
  colormode: string = 'lightMode'
  toggleclr() {
    if (this.colormode == 'lightMode') {
      this.colormode = 'darkMode'
    } else {
      this.colormode = 'lightMode'
    }

  }

  // ngstyle
  redcl: string = 'blue'
  fontsz: string = '25px'
  styleval = {
    'color': 'blue',
    'font-size': '25px'
  }

  nm: string = ''
  em: string = '';
  isvalid: boolean = false
  validate(em: any) {
    if (em.includes('@') && em.includes('.com')) {
      this.isvalid = true
    } else {
      this.isvalid = false
    }
  }
}
