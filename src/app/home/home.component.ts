import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gif: string;
  public result: any;
  public isLoading: boolean;

  constructor(private giphyService: GiphyService) {
    this.isLoading = true;
    this.getRandomGif();
  }

  ngOnInit() {
  }

  getRandomGif() {
    this.giphyService.getRandomGif().subscribe(
      (data) => {
        this.result = data;
        this.gif = this.result.data.image_url;
        this.isLoading = false;
      },
      (err) => console.log('Opps!', err),
      () => console.log('Response', this.result)
    )
  }
}
