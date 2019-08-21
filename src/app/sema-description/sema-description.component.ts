import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Quote } from '../sema'; 

@Component({
  selector: 'app-sema-description',
  templateUrl: './sema-description.component.html',
  styleUrls: ['./sema-description.component.css']
})
export class SemaDescriptionComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
