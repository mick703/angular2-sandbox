import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart" 
        [style.color]="isLiked ? 'deeppink' : '#ccc'"
        (click)="toggleLike()" 
        ></i>{{likeCount}}
    `,
    styles: [`
        .glyphicon-heart {
           cursor: pointer; 
        }
        
    `]
})
export class LikeComponent {
    @Input('like-count') likeCount: number;
    @Input('is-liked') isLiked: boolean;
    @Output() change = new EventEmitter(); 
    
    toggleLike() {
        this.isLiked = !this.isLiked;
        
        if (this.isLiked) {
            this.likeCount++
        } else {
            this.likeCount--;
        }
        
        this.change.emit({isLiked: this.isLiked})
    }
}