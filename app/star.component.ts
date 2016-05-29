import {Component} from 'angular2/core'

@Component({
    selector: 'star',
    templateUrl: 'app/templates/star.component.template.html'
})
export class StarComponent {
    isStared: boolean = false;
    toggleStar() {
        
        this.isStared = !this.isStared;
        console.log(this.isStared);
    }
}
