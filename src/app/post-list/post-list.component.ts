import { Component, OnInit, Input } from '@angular/core';
import {ArrayPost, PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    @Input() vals: ArrayPost;
    constructor(private postsService: PostsService) { }
    ngOnInit() {
    }
    onSave() {
        this.postsService.savePostToServer();
    }
    onFetch() {
        this.postsService.getPostFromServer();
    }
}
