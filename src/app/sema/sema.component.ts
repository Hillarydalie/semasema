import { Component, OnInit } from '@angular/core';
import { Quote } from '../sema';


@Component({
  selector: 'app-sema',
  templateUrl: './sema.component.html',
  styleUrls: ['./sema.component.css']
})
export class SemaComponent implements OnInit {

   quotes:Quote [] = [
    new Quote(1,'John Piper', 'Hillary Dalie', 'God is most glorified in us when we are most satisfied in Him',new Date(2012,3,14),0,0),
    new Quote(2,'J.I. Packer','Daniel Kamata', 'Your faith will not fail while God purposes to sustain it.',new Date(2013,4,1),0,0),
    new Quote(3,'Mwaura Muthee', 'Kip Otele','Not everytime change has to be given, sometimes, change has to be asked for.',new Date(2013,8,14),0,0),
  ];

  updateQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.postDatem = new Date ;
    this.quotes.push(quote);
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

    numberOfLikes : number = 0;
  numberOfDisLikes : number = 0;
  
  likeButtonClick(i) {
    this.quotes[i].numberOfLikes++;
  }

  dislikeButtonClick(i) {
    this.quotes[i].numberOfDisLikes++;
  }

  startNum:number
  lastNum:number
  ctr:number

  hUpvote(){
   this.startNum = 0
   this.lastNum = 0
    for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
     this.lastNum = this.quotes[this.ctr].numberOfLikes;
   if(this.lastNum > this.startNum){
     this.startNum = this.lastNum
     }
   }

  return  this.startNum
  }

  constructor() { }

  ngOnInit() {
  }

}
