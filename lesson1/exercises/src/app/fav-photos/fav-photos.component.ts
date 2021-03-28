import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://engineering.wustl.edu/news/magazine/images/Launchcode-icon.jpg';
  image3 = 'https://pbs.twimg.com/profile_images/1295809711393177606/zJcb95MI_400x400.jpg';

  constructor() { }

  ngOnInit() {
  }

}