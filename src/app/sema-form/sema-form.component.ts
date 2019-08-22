import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../sema'

@Component({
  selector: 'app-sema-form',
  templateUrl: './sema-form.component.html',
  styleUrls: ['./sema-form.component.css']
})
export class SemaFormComponent implements OnInit {

  newQuote = new Quote(0,"","","",new Date(),0,0);
  @Output () addNewQuote = new EventEmitter<Quote>();

  sendForm (){
    this.addNewQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit() {  
  }

}
