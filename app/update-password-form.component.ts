import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators} from 'angular2/common';
import { PasswordValidators } from './password.validators';

@Component({
    selector: 'update-password-form',
    templateUrl: 'app/templates/update-password-form.template.html'
})
export class UpdatePasswordFormComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: [
                '',
                Validators.compose([
                    Validators.required
                    
                ]),
                // Validators.composeAsync([
                //     PasswordValidators.shouldBeValid
                // ])
                
            ],
            newPassword: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                ])                
            ],
            newPassword1: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                ])                
            ]
            
        }, {validator: PasswordValidators.twoPasswordsShouldBeMatched})
    }
    
    updatePassword(){
        //Validation errors
        if (this.form.value.currentPassword != '1234') {
            this.form.find('currentPassword').setErrors({
                invalidPassword: true
            })
            return;
        }
        
        alert('Password has been updated successfully.');
        
    }
}