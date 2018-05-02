import { Component, OnInit, Input } from '@angular/core';
import {ArrayPost} from '../app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    @Input() vals: ArrayPost;
    constructor() { }
    ngOnInit() {
    }
}
