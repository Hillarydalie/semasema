import { Component, OnInit } from '@angular/core';
import { Quote } from '../sema';


@Component({
  selector: 'app-sema',
  templateUrl: './sema.component.html',
  styleUrls: ['./sema.component.css']
})
export class SemaComponent implements OnInit {

   quotes:Quote [] = [
    new Quote(1,'John Piper', 'Hillary Dalie', 'God is most glorified in us when we are most satisfied in Him',new Date(2012,3,14)),
    new Quote(2,'J.I. Packer','Daniel Kamata', 'Your faith will not fail while God purposes to sustain it.',new Date(2013,4,1)),
    new Quote(3,'Mwaura Muthee', 'Kip Otele','Not everytime change has to be given, sometimes change has to be asked for',new Date(2013,8,14)),
    new Quote(4,'Arsene Wenger', 'Njoki Munanie','Young players need freedom of expression to develop as creative players.',new Date(2015,7,6)),
    new Quote(5,'Josep Guardiola','Mephibosheth David','I will forgive the player if the players cannot get it right, but not if they do not try hard.',new Date(2016,3,1)),
    new Quote(6,'Hillary Dalie','John Musembi','Be a child again, dip your cookie in milk, eat candy, dance. Then wake up and live everyday.',new Date(2017,7,1)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
