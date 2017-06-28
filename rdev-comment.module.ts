import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr';
import {RDevCommentsComponent} from './components/comments.component';
import {SafePipe} from './pipes/safe.pipe';


const COMPONENTS = [
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
	],
	exports: [
		COMPONENTS
	],
	providers: [
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})

export class RDevCommentModule {}
