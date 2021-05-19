import { Component, Input, OnInit } from '@angular/core';
import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';

import { User } from '../../models/index';

@Component({
    selector: 'user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss'],
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
export class UserViewComponent implements OnInit {
    @Input() user!: User;

    constructor() { }

    ngOnInit(): void {
    }

}
