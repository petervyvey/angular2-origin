/// <reference path="./typings.d.ts" />

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'public', pathMatch: 'full' }
        ])
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    exports: [
        RouterModule
    ]
})
export class Module { }
