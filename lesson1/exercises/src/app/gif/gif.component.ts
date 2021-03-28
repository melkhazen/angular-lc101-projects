import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
gif = 'https://media0.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif'
  constructor() { }

  ngOnInit() {
  }

}
