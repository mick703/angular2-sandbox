import 'rxjs/add/observable/forkJoin';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class GithubUserService {
    usersUrl: string = 'https://api.github.com/users';

    constructor(private _http: Http){

    }

    getProfile(userId:string) {
        var url = this.usersUrl + '/' + userId;
        var userInfo = this._http.get(url).map(res => res.json());
        var followerInfo = this._http.get(url + '/followers').map(res => res.json());
        
        return Observable.forkJoin(userInfo, followerInfo).delay(2000); 
    }
}