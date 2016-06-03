import { Control, ControlGroup } from 'angular2/common';

export class PasswordValidators {
    static twoPasswordsShouldBeMatched(group: ControlGroup) {
        console.log('twoPasswordsShouldBeMatched triggered');
        if (group.find('newPassword').value !== group.find('newPassword1').value) 
            return { twoPasswordsShouldBeMatched: true};
        return null;
    }
    
    // static shouldBeValid(control: Control){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(function() {
    //             if (control.value != '1234')
    //                 resolve({shouldBeValid: true});
    //             else 
    //                 resolve(null);    
    //         }, 1000);
    //     });
    // }
}