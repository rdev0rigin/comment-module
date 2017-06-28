import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface Comment {
	id: string | number;
	avatarURL: string;
	authorID: string | number;
	authorName: string;
	text: string;
	removed: boolean;
	created_at: string | number;
	replyOf: string | number;
}

@Component({
	selector: 'rdev-comments-component',
	template: `
	<div class="comments-container">
		<strong>{{title}}</strong>
		<div class="comment" *ngFor="let comment of comments">
			<div class="info-box">
				<div class="avatar">
					<img [src]="comment.avatarURL">
				</div>
				<div class="name">
					{{comment.authorName}}
				</div>
				<div class="meta">
					<button *ngIf="userID === comment.authorID && !comment.removed" class="btn-warning" (click)="comment.removed = true">Remove</button>
					<button *ngIf="userID === comment.authorID && !!comment.removed" class="btn-warning" (click)="comment.removed = false">Un-Remove</button>
					made: {{comment.created_at}}
				</div>
			</div>
			<div class="text-body" *ngIf="!comment.removed">{{comment.text}}</div>
			<div class="text-body" *ngIf="!!comment.removed">- Message Removed -</div>
		</div>
	</div>
	<div class="comment-editor-container">
		<textarea class="form-control" rows="5" [(ngModel)]="newComment"></textarea>
		<button class="btn-inverse" (click)="onComment.emit(newComment)">Post</button>
	</div>
	`
})
export class RDevCommentsComponent {
	@Input()
	public userID;
	@Input()
	public title: string = 'Leave A Comment Below.';
	@Input()
	public comments: Comment[];
	@Output()
	public onComment: EventEmitter<Comment> = new EventEmitter<Comment>();
	public newComment: string = '';

}