/// <reference path="./typings.d.ts" />

import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Module } from './module';

platformBrowserDynamic().bootstrapModule(Module);
