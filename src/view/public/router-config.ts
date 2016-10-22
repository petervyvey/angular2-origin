/// <reference path="../../typings.d.ts" />

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { View as BaseView } from './view';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'public',
                component: BaseView
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class Module { }
