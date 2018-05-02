import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Blog Angular by Flo';
  arrayPost: ArrayPost;
    post_beatles: Post;
    post_stromae: Post;
    post_ironMaiden: Post;
  constructor() {
      this.arrayPost = new ArrayPost();
      this.post_beatles = new Post('Beatles', 'Beatles are the best abnd in the world, why ? Listen them and you' +
          'will understand', 100000, new Date('1960-01-17T03:24:00'),
          'https://pbs.twimg.com/profile_images/699984147956289536/CjPw79mo_400x400.jpg');
      this.post_stromae = new Post('Stromae', 'Tout simplement Formidable :) ', 500, new Date('1960-01-17T03:24:00'),
          'https://pbs.twimg.com/profile_images/643635163340017664/LK6DJ8eb_400x400.jpg');
      this.post_ironMaiden = new Post('Iron Maiden', 'Listen The trooper, Fear of the Dark ... ', 1600, new Date('1960-01-17T03:24:00'),
          'https://c1.accu.fm/static/images/covers256//covers/g-m/ironmaiden_pieceofmindironma.jpg');
      this.arrayPost.addPost(this.post_beatles);
      this.arrayPost.addPost(this.post_stromae);
      this.arrayPost.addPost(this.post_ironMaiden);
  }
    ngOnInit() {
    }
}

export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
    picture: String;
      constructor(title: string, content: string, loveIts: number, created_at: Date, picture: String) {
      this.title = title;
      this.content = content;
      this.loveIts = loveIts;
      this.created_at = created_at;
      this.picture = picture;
    }
}

export class ArrayPost {
    posts: Post[] = [];
    addPost(element: Post) {
        this.posts.push(element);
    }
    getPosts() {
        return this.posts;
    }
}
