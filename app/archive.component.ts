import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Archive</h1>
        {{archiveTitle}}
    `,

})
export class ArchiveComponent implements OnInit {
    archiveTitle:string;
    constructor(
        private _routeParams: RouteParams){
    }
    
    ngOnInit(){
        this.archiveTitle = this._routeParams.get('year') + '/' + 
            this._routeParams.get('month');
    }    
}