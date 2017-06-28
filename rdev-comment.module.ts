import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './components/home.component';
import {CommentsComponent} from './components/comments.component';
import {CommentComponent} from './components/comment.component';
import {CommentsService} from './services/comments.service';

const COMPONENTS = [
	CommentsComponent,
	CommentComponent,
];

@NgModule({
	declarations: [
		COMPONENTS
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		COMPONENTS
	],
	providers: [
		CommentsService
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	bootstrap: [ MainComponent ],
	entryComponents: [MainComponent]
})

export class RDevCommentModule {}
