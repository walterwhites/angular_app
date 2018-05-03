import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
      const content = form.value['content'];
      this.postsService.newPost(title, content, null, null, null);
      this.router.navigate(['/posts']);
  }

}
