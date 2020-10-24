import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes = [
    new Quote(1, 'Jacqui Katona', 'People are going to have to take responsibility into their own hands. We can’t leave it in the hands of politicians and petty bureaucrats. All power and strength to the people. I reckon we’ll do it. Absolutely!', new Date(2020, 10, 15) ),
    new Quote(2, 'Robyn Davidsony', 'The two important things that I did learn were that you are as powerful and strong as you allow yourself to be, and that the most difficult part of any endeavour is taking the first step, making the first decision.', new Date(2020, 10, 12) ),
  ]
  
  toggleDetails(index){
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.Quotes[index].quote}?`)

      if (toDelete){
        this.Quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.Quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date()
    this.Quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
