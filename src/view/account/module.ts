/// <reference path="../../typings.d.ts" />

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { Module as RouterConfigModule } from './router-config';


import { View as BaseView } from './view';
import { View as SignInView } from './sign-in/view';

@NgModule({
    imports: [
        CommonModule,
        RouterConfigModule,
        Ng2BootstrapModule
    ],
    declarations: [
        BaseView,
        SignInView
    ]
})
export class Module { }
