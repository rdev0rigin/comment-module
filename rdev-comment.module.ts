import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentsComponent} from './components/comments.component';
import {CommentComponent} from './components/comment.component';
import {CommentsService} from './services/comments.service';

const COMPONENTS = [
	CommentsComponent,
	CommentComponent,
];

@NgModule({
	declarations: [
		COMPONENTS,
		CommentsService
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		COMPONENTS,
		CommentsService
	],
	providers: [
		CommentsService
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})

export class RDevCommentModule {}