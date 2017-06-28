import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RDevComment} from '../models/comment.model';
@Component({
	selector: 'comment-component',
	template: `
	<div class="comment">
		<div class="avatar">
			<img [src]="comment.avatarURL">
		</div>
		<div class="comment-box">
			<div class="info-box">
					<div class="name">
						{{comment.authorName}}
					</div>
				<div class="separator">*</div>
					<div class="date">
						{{comment.created_at | date}}
					</div>
				<!--<div class="meta">-->
					<!--<button *ngIf="userID === comment.authorID && !comment.removed" class="btn-warning" (click)="comment.removed = true">Remove</button>-->
					<!--<button *ngIf="userID === comment.authorID && !!comment.removed" class="btn-warning" (click)="comment.removed = false">Un-Remove</button>-->
				<!--</div>-->
			</div>
			<div class="text">
				<div class="text-body" *ngIf="!comment.removed">{{comment.text}}</div>
				<div class="text-body" *ngIf="!!comment.removed">- Message Removed -</div>
			</div>
			<div class="options">
				<a (click)="replyActive = !replyActive">Reply</a>
				<a *ngIf="userID === comment.authorID && !comment.removed" (click)="comment.removed = true">Remove</a>
				<a *ngIf="userID === comment.authorID && !!comment.removed" (click)="comment.removed = false">Un-Remove</a>
			</div>
		</div>
	</div>
	<div class="reply-box">
		<textarea cols="5" *ngIf="!!replyActive" [(ngModel)]="replyText"></textarea>
		<div class="reply-options">
			<button class="btn" *ngIf="!!replyActive" (click)="onReply.emit({parentComment: comment, text: replyText}); replyActive = false; replyText = ''">Post Reply</button>
		</div>
		<div class="replies" *ngIf="comment.replies">
			| reply to {{comment.authorName}} |
			<comment-component *ngFor="let reply of comment.replies" (onReply)="onReply.emit($event)" [comment]="reply" [userID]="userID"></comment-component>
		</div>
	</div>
	`
})
export class CommentComponent {
	@Input()
	public comment: RDevComment= <RDevComment>{};
	@Input()
	public userID;
	@Output()
	public onReply: EventEmitter<any> = new EventEmitter();
	public replyText: string = '';
	public replyActive: boolean = false;
}