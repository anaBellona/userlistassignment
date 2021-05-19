import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Modules */
import { UserModule } from './user.module';

/* Components */
import * as userComponents from './components';

/* Guards */

/* Services */
import * as userServices from './services';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: userComponents.UserListComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
