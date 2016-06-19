import {Component} from 'angular2/core';
import {UpdatePasswordFormComponent} from './update-password-form.component'
import {GithubUserComponent} from './github-user.component';

@Component({
    selector: 'my-app',
    directives: [GithubUserComponent],
    template: `
        <github-user>
    `
})
export class AppComponent {
}