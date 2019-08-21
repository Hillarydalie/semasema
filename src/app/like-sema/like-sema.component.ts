import { Component, OnInit } from '@angular/core';
import { Quote } from '../sema';


@Component({
  selector: 'app-like-sema',
  templateUrl: './like-sema.component.html',
  styleUrls: ['./like-sema.component.css']
})
export class LikeSemaComponent {

  numberOfLikes : number = 0;
  numberOfDisLikes : number = 0;
  
  likeButtonClick(i) {
    this.numberOfLikes +=1;
  }

  dislikeButtonClick(i) {
    this.numberOfDisLikes +=1;
  }

  startNum:number
  lastNum:number
  ctr:number

  hUpvote(){
   this.startNum = 0
   this.lastNum = 0
    for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
     this.lastNum = this.quotes[this.ctr].upvotes;
   if(this.lastNum > this.startNum){
     this.startNum = this.lastNum
     }
   }

  return  this.startNum
  }

  constructor() {}

  ngonInit () {}
}