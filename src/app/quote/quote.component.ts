import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  Quotes = [
    new Quote(
      1,
      'Jacqui Katona',
      'People are going to have to take responsibility into their own hands. We can’t leave it in the hands of politicians and petty bureaucrats. All power and strength to the people. I reckon we’ll do it. Absolutely!',
      'Charles',
      0,
      0,
      new Date(2020, 10, 15)
    ),
    new Quote(
      2,
      'Robyn Davidsony',
      'The two important things that I did learn were that you are as powerful and strong as you allow yourself to be, and that the most difficult part of any endeavour is taking the first step, making the first decision.',
      'Yvette',
      0,
      0,
      new Date(2020, 10, 12)
    ),
    new Quote(
      3,
      'Sue Coleman-Haseldine',
      'We are telling the story so that our history is not forgotten, but also to create a better future for all people, all over the world. This is why we want nuclear weapons permanently banned and the uranium that can create them left in the ground. The future forever belongs to the next generation.',
      'Axel',
      0,
      0,
      new Date(2020, 9, 12)
    ),
    new Quote(
      4,
      'Barbara Deming',
      'Gandhi once declared that it was his wife who unwittingly taught him the effectiveness of nonviolence. Who better than women should know that battles can be won without resort to physical strength? Who better than we should know all the power that resides in noncooperation?',
      'Ian',
      0,
      0,
      new Date(2020, 10, 22)
    ),
    new Quote(
      5,
      'Janet Mock',
      'I believe that telling our stories, first to ourselves and then to one another and the world, is a revolutionary act.',
      'Charles',
      0,
      0,
      new Date(2020, 9, 22)
    ),
  ];

  toggleDetails(index) {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.Quotes[index].author}'s quote?`
      );

      if (toDelete) {
        this.Quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.Quotes.length;
    quote.id = quoteLength + 1;
    quote.publishedDate = new Date();
    this.Quotes.push(quote);
  }
  first: number;
  second: number;
  counter: number;
  Highestvote() {
    this.first = 0;
    this.second = 0;
    for (this.counter = 0; this.counter < this.Quotes.length; this.counter++) {
      this.second = this.Quotes[this.counter].like;
      if (this.second > this.first) {
        this.first = this.second;
      }
    }
    return this.first;
  }

  constructor() {}

  ngOnInit(): void {}
}
