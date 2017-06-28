import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'rdev-comments-component',
	template: `
	<div class="comment-editor-container">
		<div>Post A Comment</div>
		<textarea class="form-control" rows="5" [(ngModel)]="newComment"></textarea>
		<button class="btn btn-inverse" (click)="onComment.emit(newComment); newComment =''">Post</button>
	</div>
	<div class="comments-container">
		<strong>{{title}}</strong>
		<comment-component *ngFor="let comment of comments" [comment]="comment" [userID]="userID" (onReply)="onReply.emit($event)"></comment-component>
	</div>
	`
})
export class CommentsComponent {
	@Input()
	public userID;
	@Input()
	public title: string = 'Leave A Comment Below.';
	@Input()
	public comments: Comment[];
	@Output()
	public onComment: EventEmitter<Comment> = new EventEmitter<Comment>();
	@Output()
	public onReply: EventEmitter<any> = new EventEmitter<any>();
	public newComment: string = '';

}