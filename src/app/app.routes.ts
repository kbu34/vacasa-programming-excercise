import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { RepoListComponent } from './repo-list/repo-list.component';

export const routes: Routes = [
    { path: 'settings', component: SettingsComponent }, 
    { path: 'repositories', component: RepoListComponent}
];
