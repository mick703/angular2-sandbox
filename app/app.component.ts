import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums.component';
import {ContactComponent} from './contact.component';
import {AlbumComponent} from './album.component';
import {ArchivesComponent} from './archives.component';
import {ArchiveComponent} from './archive.component';


@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/albums/:id', name: 'Album', component: AlbumComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']},
    {path: '/archives', name: 'Archives', component: ArchivesComponent},
    {path: '/archives/:year/:month', name: 'Archive', component: ArchiveComponent}
])
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/app.component.html'
})
export class AppComponent {
}