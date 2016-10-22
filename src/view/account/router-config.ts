/// <reference path="../../typings.d.ts" />

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { View as BaseView } from './view';
import { View as SignInView } from './sign-in/view';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'account',
                component: BaseView,
                children: [
                    { path: '', redirectTo: 'signin', pathMatch: 'full' },
                    { path: 'signin', component: SignInView }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class Module { }
