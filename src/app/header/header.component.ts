import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigateByUrl('introduction');
  }

  goView(){
    this.router.navigateByUrl('view');
  }

  goTest(){
    this.router.navigateByUrl('test');
  }

  goQuestionnaire(){
    this.router.navigateByUrl('questionnaire');
  }
}
