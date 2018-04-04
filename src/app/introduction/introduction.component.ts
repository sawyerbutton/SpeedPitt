import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(
    public router: Router
  ) {}


  ngOnInit() {
  }

  clickTest(){
    this.router.navigateByUrl('test');
  }

  clickView(){
    this.router.navigateByUrl('');
  }

  clickOther(){
    this.router.navigateByUrl('');
  }

}
