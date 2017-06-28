import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './components/home.component';
import {CommentsComponent} from './components/comments.component';
import {CommentComponent} from './components/comment.component';
import {CommentsService} from './services/comments.service';

const MAIN_ROUTES: Routes = [
	{path: 'comments', children: [
		{path:'', component: HomeComponent},
	]}
];

const COMPONENTS = [
	MainComponent,
	HomeComponent,
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
		RouterModule.forRoot(MAIN_ROUTES),
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
