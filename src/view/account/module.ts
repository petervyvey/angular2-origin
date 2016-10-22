/// <reference path="../../typings.d.ts" />

import { NgModule } from '@angular/core';
import { Module as RouterConfigModule } from './router-config';

import { View as BaseView } from './view';
import { View as SignInView } from './sign-in/view';

@NgModule({
    imports: [
        RouterConfigModule
    ],
    declarations: [
        BaseView,
        SignInView
    ]
})
export class Module { }
