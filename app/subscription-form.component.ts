import { Component } from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/templates/subscription-form.component.html'
})
export class SubscriptionForm {
    onSubmit(form){
        console.log(form);
    }
}