import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { SinglePostComponent } from './single-post/single-post.component';

import {RouterModule, Routes} from '@angular/router';
import {PostsService} from './services/posts.service';
import {AuthService} from './services/Auth.service';
import { ErrorComponent } from './error/error.component';
import {AuthGuard} from './services/auth-guard-service';
import { EditPostComponent } from './edit-post/edit-post.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
    { path: 'posts', component: PostViewComponent },
    { path: 'posts/:id', component: SinglePostComponent },
    { path: 'edit', component: EditPostComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: '', component: PostViewComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    ErrorComponent,
    EditPostComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [
      PostsService,
      AuthService,
      AuthGuard,
      UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
