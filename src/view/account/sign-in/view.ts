/// <reference path="../../../typings.d.ts" />

import { Component } from '@angular/core';

@Component({
    selector: 'account-sign-in',
    template: `
    <!-- ACCOUNT SIGN IN: BEGIN -->
    <div>ACCOUNT SIGN IN</div>
    <p>
        <alert *ngFor="let alert of alerts; let i = index" [type]="alert.type" dismissible="true" (close)="closeAlert(i)">Test</alert>
    </p>
    <!-- ACCOUNT SIGN IN: END -->
    `
})
export class View {

    public alerts: Array<Object> = [
        {
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        },
        {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.',
            closable: true
        }
    ];

    public closeAlert(i: number): void {
        this.alerts.splice(i, 1);
    }

}
