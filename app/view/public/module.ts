/// <reference path="../../typings.d.ts" />

import { NgModule } from '@angular/core';
import { Module as RouterConfigModule } from './router-config';

import { View as BaseView } from './view';

@NgModule({
    imports: [
        RouterConfigModule
    ],
    declarations: [
        BaseView
    ]
})
export class Module { }
