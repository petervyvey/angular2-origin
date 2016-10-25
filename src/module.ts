/// <reference path="./typings.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { Application } from './application/application';
import { Module as RouterConfigModule } from './router-config';

import { Module as PublicModule } from './view/public/module';
import { Module as AccountModule } from './view/account/module';

import 'twbs/bootstrap';
import 'twbs/bootstrap/css/bootstrap.css';

@NgModule({
    declarations: [
        Application
    ],
    imports: [
        BrowserModule,
        Ng2BootstrapModule,
        RouterConfigModule,
        PublicModule,
        AccountModule
    ],
    bootstrap: [ Application ]
})
export class Module { }
