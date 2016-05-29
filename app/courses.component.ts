import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {StarComponent} from './star.component'
@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow [(ngModel)]="searchTerm"/>
        <button (click)="onClick($event)">Search</button>
        <p>You are searching {{searchTerm}}</p>
        <ul [style.border]="hasBorder ? '1px solid red' : 'none'">
            <li *ngFor="#course of courses">
            {{course}}<star></star>
            </li>
        </ul>
        `,
    directives: [AutoGrowDirective, StarComponent],    
    providers: [CourseService]
})
export class CoursesComponent {
    searchTerm: string;
    hasBorder: boolean = false;
    title: string = "The title of courses page";
    courses;
    
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
    
    onClick($event) {
        console.log(this.searchTerm);
    }
}