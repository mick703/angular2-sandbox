import {Component} from 'angular2/core';
import {UpdatePasswordFormComponent} from './update-password-form.component'

@Component({
    selector: 'my-app',
    directives: [UpdatePasswordFormComponent],
    template: `
        <div class="container">
            <h1>Update Password</h1>
            <update-password-form></update-password-form>
        </div>
    `
})
export class AppComponent {
}