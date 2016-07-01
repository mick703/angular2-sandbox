import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { ArchiveComponent } from './archive.component';
@Component({
    template: `
        <h1>Archives</h1>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="[
                    'Archive', 
                    {year: archive.year, month: archive.month}]">
                {{archive.year}}/{{archive.month}}
                </a>
            </li>    
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent implements OnInit{
    archives:Array<Object> = [];

    constructor(){

    }

    ngOnInit(){
        for (var i=1; i <=12; i++) {
            this.archives.push({
                'year': 2015,
                'month': i
            })
        }
    }
}