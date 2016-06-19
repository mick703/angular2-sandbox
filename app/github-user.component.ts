import { Component } from 'angular2/core';
import {GithubUserService} from './github-user.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'github-user',
    template: `
    
    <div id="profile" class="container">
        <div id="profile">
            <i *ngIf="loading" class="fa fa-spinner fa-spin fa-3x"></i>
            <div *ngIf="!loading">
                <h2>@{{_userProfile.login}}</h2>
                <img  class="avatar" src={{_userProfile.avatar_url}}/>
            </div>    
        </div>
        <h3>Followers</h3>
        <i *ngIf="loading" class="fa fa-spinner fa-spin fa-3x"></i>
        <div class="media" id="followers" *ngFor="#follower of _followers">
            <div  class="media-left">
                <a href={{follower.html_url}}>
                <img class="media-object avatar" src={{follower.avatar_url}} alt={{follower.login}}>
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{follower.login}}</h4>
            </div>

        <div>
    </div>
    `,
    providers: [GithubUserService, HTTP_PROVIDERS]

})
export class GithubUserComponent implements OnInit{
    _userProfile: Object;
    _followers: any[];
    loading = true;

    constructor(private _githubUserService: GithubUserService) {

    }

    ngOnInit(){
        this._githubUserService.getProfile('octocat').subscribe(result => {
            this._userProfile = result[0];
            this._followers = result[1];
            this.loading = false;   
        });
    }
}