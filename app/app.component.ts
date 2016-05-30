import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import { ZippyComponent } from './zippy.component';
import { SubscriptionForm } from './subscription-form.component';

@Component({
    selector: 'my-app',
    template: `
    <zippy title="This is a title">
    <div>Body content here</div>
    </zippy>
    <subscription-form></subscription-form>
    `,
    directives: [
        CoursesComponent,
        AuthorsComponent,
        ZippyComponent,
        SubscriptionForm
        ]
})
export class AppComponent { }