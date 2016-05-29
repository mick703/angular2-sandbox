import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div class="voter">
        <i class="glyphicon glyphicon-menu-up" 
        [class.highlighted]="(yourVote > 0) ? true : false"
        (click)="updateVote(1)" 
        ></i>
        <span>{{voteCount}}</span>
        <i class="glyphicon glyphicon-menu-down" 
        [class.highlighted]="(yourVote < 0) ? true : false"
        (click)="updateVote(-1)" 
        ></i>        
        
        </div>
    `,
    styles: [`
        .voter {
            margin-left: 20px;
            width: 20px;
        }
        i {
            text-align: center;
            display: block;
            cursor: pointer;
        }
        .highlighted {
            color: orange;
        }

        
    `]
})
export class VoterComponent {
    @Input('vote-count') voteCount: number;
    @Input('your-vote') yourVote: number;
    @Output() change = new EventEmitter(); 
    
    updateVote(vote) {
        console.log(this.yourVote);
        
        if (vote == 1) {
            if (this.yourVote < 1) {
                this.voteCount++;
                this.yourVote = this.yourVote + vote;
                this.change.emit({yourVote: this.yourVote})
            }
        } else if (vote == -1) {
            if (this.yourVote > -1) {
                this.voteCount--;
                this.yourVote = this.yourVote + vote;
                this.change.emit({yourVote: this.yourVote})
            } 
        }

        
    }
}