/// <reference path="../typings.d.ts" />

import { Component } from '@angular/core';

import './application.css';

@Component({
    selector: 'application',
    template: `
    <div class="application">
        <a routerLink="/public">Home</a>
        <a routerLink="/account/signin">Sign In</a>
        <router-outlet></router-outlet>
    </div>
    `
})
export class Application {
}
