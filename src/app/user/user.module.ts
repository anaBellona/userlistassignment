import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { UiModule } from '../../shared/ui/ui.module';

/* Components */
import * as userComponents from './components';

/* Guards */

/* Services */
import * as userServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        UiModule
    ],
    declarations: [
        ...userComponents.components
    ],
    providers: [
        userServices.services
    ]
})
export class UserModule { }
