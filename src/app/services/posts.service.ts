import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

export class PostsService {
    postSubject = new Subject<ArrayPost>();
    init: Init = new Init();
    private arrayPost: ArrayPost = this.init.arrayPost;
    getPostById(id: number) {
        const post = this.arrayPost.getPosts().find(
            (postObject) => {
                return postObject.id === id;
            }
        );
        return post;
    }
    emitPostSubject() {
        this.postSubject.next(this.arrayPost);
    }
}

export class Init {
    arrayPost: ArrayPost;
    post_beatles: Post;
    post_stromae: Post;
    post_ironMaiden: Post;
    constructor() {
        this.arrayPost = new ArrayPost();
        this.post_beatles = new Post(1, 'Beatles', 'Beatles are the best abnd in the world, why ? Listen them and you' +
            'will understand', 100000, new Date('1960-01-17T03:24:00'),
            'https://pbs.twimg.com/profile_images/699984147956289536/CjPw79mo_400x400.jpg');
        this.post_stromae = new Post(2, 'Stromae', 'Tout simplement Formidable :) ', 500, new Date('1960-01-17T03:24:00'),
            'https://pbs.twimg.com/profile_images/643635163340017664/LK6DJ8eb_400x400.jpg');
        this.post_ironMaiden = new Post(3, 'Iron Maiden', 'Listen The trooper, Fear of the Dark ... ', 1600,
            new Date('1960-01-17T03:24:00'),
            'https://c1.accu.fm/static/images/covers256//covers/g-m/ironmaiden_pieceofmindironma.jpg');
        this.arrayPost.addPost(this.post_beatles);
        this.arrayPost.addPost(this.post_stromae);
        this.arrayPost.addPost(this.post_ironMaiden);
        console.log('test');
        console.log(this.arrayPost.getPosts());
    }
}

export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
    picture: String;
    id: number;
    constructor(id: number, title: string, content: string, loveIts: number, created_at: Date, picture: String) {
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
    getPosts() {
        return this.posts;
    }
    addPost(element: Post) {
        this.posts.push(element);
    }
}
