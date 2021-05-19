import { Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../models/index';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    private usersUrl = 'api/users';

    constructor() { }

    getUsers(): Observable<User[]> {
        return of(users);
    }

    private handleError(err: any): Observable<never> {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        return throwError(errorMessage);
    }
}

export const users: User[] = [
    {
        id: 1,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
        firstname: 'Deborah',
        lastname: 'Miller',
        age: '25'
    },
    {
        id: 2,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
        firstname: 'Johannes',
        lastname: 'Myles',
        age: '34'
    },
    {
        id: 3,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
        firstname: 'Britta',
        lastname: 'Rhudinbergh',
        age: '43'
    },
    {
        id: 4,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',
        firstname: 'Olivia',
        lastname: 'Brown',
        age: '44'
    },
    {
        id: 5,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',
        firstname: 'Daniel',
        lastname: 'Rudin',
        age: '32'
    },
    {
        id: 6,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',
        firstname: 'Teressa',
        lastname: 'Sandhurst',
        age: '35'
    },
    {
        id: 7,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',
        firstname: 'Dina',
        lastname: 'Sokolowski',
        age: '28'
    },
    {
        id: 8,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',
        firstname: 'André',
        lastname: 'Szillagy',
        age: '23'
    },
    {
        id: 9,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',
        firstname: 'Fabian',
        lastname: 'Stocker',
        age: '45'
    },
    {
        id: 10,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',
        firstname: 'Christian',
        lastname: 'Williams',
        age: '41'
    }
]

function tap(arg0: (data: any) => void): any {
    throw new Error("Function not implemented.");
}
