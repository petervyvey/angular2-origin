/// <reference path="../../typings.d.ts" />

import { Component } from '@angular/core';

@Component({
    selector: 'account-view',
    template: `
    <!-- ACCOUNT: BEGIN -->
    <div>ACCOUNT VIEW</div>
    <router-outlet></router-outlet>
    <!-- ACCOUNT: END -->
    `
})
export class View {
}
