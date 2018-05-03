import { Component, OnInit } from '@angular/core';
import {ArrayPost, PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

    title = 'View posts page by Flo';
    arrayPost: ArrayPost;
    postSubscription: Subscription;
    constructor(private postsService: PostsService) {
    }
    ngOnInit() {
        this.postSubscription = this.postsService.postSubject.subscribe(
            (post: ArrayPost) => {
                this.arrayPost = post;
            }
        );
        this.postsService.emitPostSubject();
    }
}
