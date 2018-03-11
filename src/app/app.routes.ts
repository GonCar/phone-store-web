import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'phones', pathMatch: 'full'},
    { path: 'phones', component: PhoneListComponent}
];
