import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPostsService } from './get-posts.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fetch-app';
  titles: string[] = [];
  
  
  constructor(private getPostsService: GetPostsService) {

  }

  ngOnInit(): void {
    this.getPostsService.getPosts()
    .subscribe((data) => {
      console.log(data);
      this.titles = data;
    })
  }
}
