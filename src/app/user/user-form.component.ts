import { Component, Input, OnInit }             from '@angular/core';
import { ActivatedRoute, Params, Router }       from '@angular/router';
import { Location }                             from '@angular/common';

import { User }         from './user';
import { UserService }  from './user.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'form-user',
    templateUrl: './app/user/user-form.component.html',
    providers: [UserService]
})

export class UserFormComponent implements OnInit {
    @Input()
    user: User;
    newUser: boolean = true;
    id: number;

    constructor(
        private userService: UserService,
        private location: Location,
        private activatedRouter: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRouter.params.subscribe((params: Params) => {
            this.id = +params['id'];
        });
        this.user = new User();

        if (this.id) {
            this.userService.getUser(this.id).then(user => this.user = user);
        }

        this.newUser = !this.id;
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if (this.newUser) {
            this.userService.createUser(this.user).then(() => this.router.navigate(['user-list']));
        }else {
            this.userService.updateUser(this.user).then(() => this.goBack());
        }
    }

}