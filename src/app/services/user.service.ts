import {User} from '../models/User.model';
import {Subject} from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
        {
            firstname: 'james',
            lastname: 'Smith',
            email: 'james5432@gmail.com'
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}