import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './components/home.component';
import {RDevCommentsComponent} from './components/comments.component';
import {SafePipe} from './pipes/safe.pipe';

const MAIN_ROUTES: Routes = [
		{path: 'starter', component: HomeComponent},
		{path:'', redirectTo: '/starter', pathMatch: 'full'}
];

const COMPONENTS = [
	// MainComponent,
	HomeComponent,
	RDevCommentsComponent,
	SafePipe
];

@NgModule({
	declarations: [
		COMPONENTS
	],
	imports: [
		NoopAnimationsModule,
		BrowserAnimationsModule,
		ToastModule.forRoot(),
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(MAIN_ROUTES),
	],
	exports: [
		COMPONENTS
	],
	providers: [
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	// bootstrap: [ MainComponent ]
})

export class RDevCommentModule {}
