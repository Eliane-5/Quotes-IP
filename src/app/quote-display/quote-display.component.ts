import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1, 'Eliane','Eli','For every dark night there is a brighter day!',new Date(2019,10,21)),
    new Quote (2, 'Naice','Nais','The most important thing is to enjoy life,.. to be  happy!',new Date(2019,7,22)),
    new Quote (3, 'Julia','JU','Food is bae for life!',new Date(2019,7,23)),
  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  completeDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote id: ${this.quotes[index].id}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
    
  constructor() { }

  ngOnInit() {
  }

}
