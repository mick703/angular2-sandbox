import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
import {LikeComponent} from './like.component'
import { VoterComponent } from './voter.component';

@Component({
    selector: 'authors',
    template: `
        <voter
        [vote-count] = 234
        [your-vote] = 1
        ></voter>
        <h2>Authors</h2>
        <ul>
            <li *ngFor='#author of authors'>
                {{author.name}}
                <like 
                    [is-liked]="author.isLiked"
                    [like-count]="author.likeCount"
                    (change)="onLikeChange($event, author.name)"
                    >
                </like>
            </li>
        </ul>
    `,
    directives: [LikeComponent, VoterComponent],
    providers: [AuthorService]
})
export class AuthorsComponent {
    authors: Object[];
    constructor(private authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
    onLikeChange($event, authorName){
        //console.log($event);
        this.authorService.updateLikeCount($event.isLiked, authorName);
    }
    
}