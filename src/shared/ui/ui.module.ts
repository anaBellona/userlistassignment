import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import * as uiComponents from './components';

/* Layouts */
import * as uiLayouts from '../ui/layouts';
import { HeaderComponent } from './components/header/header.component';

@NgModule({

    imports: [
        CommonModule
    ],
    declarations: [
        ...uiComponents.components,
        ...uiLayouts.layouts,
        HeaderComponent
    ],
    exports: [
        ...uiComponents.components,
        ...uiLayouts.layouts
    ]
})
export class UiModule { }
