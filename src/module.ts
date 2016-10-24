/// <reference path="./typings.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Application } from './application/application';
import { Module as RouterConfigModule } from './router-config';

import { Module as PublicModule } from './view/public/module';
import { Module as AccountModule } from './view/account/module';

import 'bootstrap';
import 'bootstrap/css/bootstrap.css';

@NgModule({
    imports: [
        BrowserModule,
        RouterConfigModule,
        PublicModule,
        AccountModule,
        NgbModule.forRoot()
    ],
    declarations: [
        Application
    ],
    bootstrap: [ Application ]
})
export class Module { }
