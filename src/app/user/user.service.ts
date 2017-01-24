import { Injectable }           from '@angular/core';
import { Headers, Http }        from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private userUrl = 'app/users';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    getUsers(): Promise<User[]> {
        return this.http.get(this.userUrl)
                .toPromise()
                .then(response => response.json().data as User[])
                .catch(this.handleError);
    }

    getUser(id:  number): Promise<User> {
        const url = `${this.userUrl}/${id}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as User)
                    .catch(this.handleError);
    }

    updateUser(user: User): Promise<User> {
        const url = `${this.userUrl}/${user.id}`;
        return this.http
                    .put(url, JSON.stringify(user), {headers: this.headers})
                    .toPromise()
                    .then(() => user)
                    .catch(this.handleError);
    }

    createUser(user: User): Promise<User> {
        return this.http
                .post(this.userUrl, JSON.stringify({
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                userName: user.userName,
                                password: user.password
                            }), {headers: this.headers})
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handleError);
    }
}