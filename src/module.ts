/// <reference path="./typings.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Application } from './application/application';
import { Module as RouterConfigModule } from './router-config';

import { Module as PublicModule } from './view/public/module';
import { Module as AccountModule } from './view/account/module';

@NgModule({
    imports: [
        BrowserModule,
        RouterConfigModule,
        PublicModule,
        AccountModule
    ],
    declarations: [
        Application
    ],
    bootstrap: [ Application ]
})
export class Module { }
