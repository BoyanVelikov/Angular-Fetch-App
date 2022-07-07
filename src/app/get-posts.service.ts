import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  titles: string[] = [];
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((data) => {
      
      let newData = Object.entries(data);

      for (let k in newData) {
            this.titles.push(newData[k][1].title);
          }
      return this.titles;
    }))
  }
}
