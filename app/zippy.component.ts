import { Component, Input } from 'angular2/core';

@Component({
    selector: 'zippy',
    template: ` 
        <div class="panel panel-default">
            <div class="panel-heading" 
            (click)="toggleBody()">
                <h2>{{title}}
                
                    <span class="glyphicon pull-right"
                        [ngClass]="{
                            'glyphicon-chevron-down': isRetracted,
                            'glyphicon-chevron-up': !isRetracted
                        }">
                    </span>  
                </h2>
  
            </div>
            <div class="panel-body" [hidden]="isRetracted">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        // span.glyphicon {
        //     float:right;
        // } 
    `]
})
export class ZippyComponent {
    @Input() title:string;
    isRetracted:boolean = true;
    toggleBody(){
        this.isRetracted = !this.isRetracted;
    }
}