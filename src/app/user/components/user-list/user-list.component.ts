import { Component, OnInit } from '@angular/core';
import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';

import { UserService } from '../../services/index';
import { User } from '../../models/index';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    animations: [

        trigger('showMore', [
            state('show', style({
                height: '50px',
                opacity: 1
            })),
            state('hide', style({
                visibility: 'hidden',
                height: '10px'
            })),
            transition('* <=> *', [
                group([
                    query('@theChildAnimation', animateChild()),
                    animate('0.5s'),
                ]),
            ]),
        ]),
        trigger('theChildAnimation', [
            state('show', style({
                opacity: 1
            })),
            state('hide', style({
                visibility: 'hidden',
            })),
            transition('* <=> *', [
                animate('0.25s'),
            ]),
        ])
    ]
})
export class UserListComponent implements OnInit {

    public users: User[] = [];
    public filteredUsers: User[] = [];
    private _userFilter: string = '';

    get userFilter(): string {
        return this._userFilter;
    }
    set userFilter(value: string) {
        this._userFilter = value;
        this.filteredUsers = (value.length >= 3) ? this.performFilter(value) : this.users;
    }

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe({
            next: data => {
                data.forEach(element => {
                    element.showMore = false;
                    this.users.push(element);
                })

            }
        });
        this.userFilter = '';
    }

    showMore(user: User) {
        user.showMore = !user.showMore;
    }

    sortByAgeClick() {
        this.filteredUsers.sort((a, b) => +a.age - +b.age);
    }

    performFilter(filterBy: string): User[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.users.filter((user: User) =>
            user.firstname.toLocaleLowerCase().includes(filterBy));
    }
}
