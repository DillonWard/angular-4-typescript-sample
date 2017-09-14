import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts:Post[];
  isEdit:boolean = false;


  constructor(private dataService:DataService) {

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

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);

      this.posts = posts;
    });
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
  
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address{
    street:string,
    city:string,
    state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}