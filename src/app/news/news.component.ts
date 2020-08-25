import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public articles;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getNews().subscribe( data => this.fromApiService(data) )

  }

  fromApiService(data: any) {
  this.articles = data['articles'];
  }


}
