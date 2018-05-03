import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

    title: string;
    content: string;
    loveIts: number;
    created_at: string;
    picture: String;
    id: number;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const post = this.postsService.getPostById(+id);
    this.id = id;
    this.title = post.title;
    this.content = post.content;
    this.loveIts = post.loveIts;
    this.created_at = post.created_at;
    this.picture = post.picture;
  }
}
