import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnaireService } from './questionnaire.service';
import { question } from './question';
  declare var jquery:any;
  declare var $ :any;

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public isLinear:boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // displayedColumns = ['name','address1','numberHousehold','state','city','zipcode'];
  public computerDevice:boolean;
  otherComputerDevice = [
    {viewValue:'Yes',value:true},
    {viewValue:'No',value:false}
  ];
  public reasonForNoInternet:string;
  public notHaveInternet = ['Cost','Do not have a device','Do not know how to use it','Do not want the internet','Only have a mobile'];
  // questions: question[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private router:Router,
    private questionService: QuestionnaireService,
    public q : question
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      addressOne: ['', Validators.required],
      numberHousehold:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipCode:['',Validators.required]
    });
  }

  public async submit(){
    await $.getJSON("http://api.db-ip.com/v2/free/self")
      .then(addrInfo => this.helper(addrInfo));
  }

  public async helper(addrInfo){
    console.log(addrInfo);
    // console.log(addrInfo.ipAddress);
    this.q.privateLocation = addrInfo.ipAddress;
    this.q.reasonNoInternet = this.reasonForNoInternet;
    this.q.computerDevice = this.computerDevice;
    console.log(this.q);
    await this.questionService.addData(this.q)
      .subscribe();
  }
}
