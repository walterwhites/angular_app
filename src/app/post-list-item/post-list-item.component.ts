import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() loveits: number;
  isAvailable = true;
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
  getVote() {
    return this.loveits;
  }
  ngOnInit() {
  }

}
