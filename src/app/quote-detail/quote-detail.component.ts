import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote; 
  @Output() isComplete = new EventEmitter<boolean>();
  delete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likes=0
  dislikes=0

  upVote(){
    this.likes=this.likes+1;
  }
  downVote(){
    this.dislikes = this.dislikes+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
