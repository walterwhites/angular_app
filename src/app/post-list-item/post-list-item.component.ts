import { Component, OnInit, Input } from '@angular/core';
import {Post, PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() loveits: number;
  isAvailable = true;
  constructor(private postsServices: PostsService) {
  }
  onDeleteVote() {
    this.loveits --;
      this.isAvailable = false;
      setTimeout(
          () => {
              this.isAvailable = true;
          }, 2000
      );
  }
  onAddVote() {
    this.loveits ++;
      this.isAvailable = false;
      setTimeout(
          () => {
              this.isAvailable = true;
          }, 2000
      );
  }
  onDelete(id: number) {
    this.postsServices.deletePostFromServer(id);
  }
  getVote() {
    return this.loveits;
  }
  ngOnInit() {
  }
}
