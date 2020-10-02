import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form;
  
  offshore=["Chennai","Bangalore", "Hyderabad", "Pune" ,"Kochi"];
  onshore=["US", "Non US"];
  locations = [];
  isEmpty = true;
  count:object;
  isSelected=false;
  skills=[
    {id:1, name:'HTML5,CSS3,JS', checked: false},
    {id:2, name:'Angular 8', checked: false},
    {id:3, name:'Express JS', checked: false},
    {id:4, name:'SASS', checked: false},
    {id:5, name:'React JS', checked: false},
    {id:6, name:'Node JS', checked: false},
    {id:7, name:'ES5,ES6,ES7...', checked: false},
    {id:8, name:'Veu JS', checked: false},
    {id:9, name:'Mango DB', checked: false},
    {id:10, name:'Bootstrap 4', checked: false},
    {id:11, name:'TypeScript', checked: false}
  ];
  isSubmitted=false;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      username: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      associd: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{6}$')
      ]],
      projid: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{12}$')
      ]],
      location: ['',Validators.required],
      location2: ['',Validators.required],
      skill: ['',Validators.required],
      profile: ['',[Validators.required]],
      comment: ['',[Validators.required]]
    })
  }

  ngOnInit():void {}

  onSubmit() {
    console.log("Submitted");
    this.form.reset();
    this.isSubmitted = true;
  } 

  onReset()
  {
    this.form.reset();
    this.isSelected=false;
  }

  get username(){
    return this.form.get('username');
  }
  get associd(){
    return this.form.get('associd');
  }
  get projid(){
    return this.form.get('projid');
  }
  get location(){
    return this.form.get('location');
  }
  get location2(){
    return this.form.get('location2');
  }
  get skill(){
    return this.form.get('skill');
  }

  get profile(){
    return this.form.get('profile');
  }
  get comment(){
    return this.form.get('comment');
  }

  onChange(value){
    console.log(" Value is : ", value );
    this.isEmpty=false;
    if(value==1)
    {
      this.locations=this.offshore;      
    }
    else
    this.locations=this.onshore;
 }
 onCheck(value){
  let a=this.skills.find(
    skill=> skill.id == value
    );
  a.checked=!a.checked;
  let count=this.skills.filter(
    add=> add.checked==true
    )
  console.log(count.length);

  count.length<5 ? this.isSelected=true : this.isSelected=false;
 }
}
