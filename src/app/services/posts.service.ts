import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {
    postSubject = new Subject<ArrayPost>();
    private arrayPost: ArrayPost;

    constructor(private httpClient: HttpClient) {
        this.getPostFromServer();
    }
    getPostById(id: number) {
        const post = this.arrayPost.posts.find(
            (postObject) => {
                return postObject.id === id;
            }
        );
        return post;
    }
    emitPostSubject() {
        this.postSubject.next(this.arrayPost);
    }

    newPost(title: string, content: string) {
        const id = this.arrayPost.posts[(this.arrayPost.posts.length - 1)].id + 1;
        const post = new Post(id, title, content, 10, new Date().toDateString(),
            'http://www.adbazar.pk/frontend/images/default-image.jpg');
        this.arrayPost.posts.push(post);
        this.savePostToServer();
    }

    deletePostFromServer(id: number) {
        this.httpClient.delete('https://http-client-demo-5055d.firebaseio.com/posts/posts/' + id + '.json')
            .subscribe(
                () => {
                    this.arrayPost.posts.splice(id, 1);
                    console.log('suppression terminé');
                    this.emitPostSubject();
                },
                (error) => {
                    console.log('erreur de suppression ! ' + error);
                }
            );
    }

    savePostToServer() {
        this.httpClient.put('https://http-client-demo-5055d.firebaseio.com/posts.json', this.arrayPost)
            .subscribe(
                () => {
                    console.log('enrigstrement terminé');
                    this.emitPostSubject();
                },
                (error) => {
                    console.log('erreur de sauvegarde ! ' + error);
                }
            );
    }

    getPostFromServer() {
        this.httpClient
            .get<ArrayPost>('https://http-client-demo-5055d.firebaseio.com/posts.json')
            .subscribe(
                (response: ArrayPost) => {
                    this.arrayPost = response as ArrayPost;
                    this.emitPostSubject();
                    console.log('données récupérées ! ');
                    console.log(this.arrayPost);
                },
                (error) => {
                    console.log('erreur de chargement ! ' + error);
                }
            );
    }
}

export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: string;
    picture: String;
    id: number;
    constructor(id: number, title: string, content: string, loveIts: number, created_at: string, picture: String) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = created_at;
        this.picture = picture;
    }
}

export class ArrayPost {
    posts: Post[] = [];
}
