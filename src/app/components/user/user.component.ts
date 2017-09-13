import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address
  hobbies:string[];


  constructor() {

    console.log('Constructor Ran');
   }

  ngOnInit() {
    console.log('ngOnInit Ran');
    this.name = 'Dillon';
    this.age = 21;
    this.email = 'Dillon@email.com';
    this.address = {
      street: 'Innishanagh Park',
      city: 'Galway',
      state: 'Galway'
    }
    this.hobbies = ['Coding', ' playing Guitar'];
  }
  onClick(){
    console.log('Click!');
    this.name = 'Dilly';
    this.hobbies.push('music');
  }

  addHobby(hobby){

    console.log(hobby);
    this.hobbies.unshift(hobby);    
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby)
    
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
  
  
}

interface Address{
    street:string,
    city:string,
    state:string
}
