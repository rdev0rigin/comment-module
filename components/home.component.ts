import {Component} from '@angular/core';
import {RDevComment} from '../models/comment.model';
import {CommentsService} from '../services/comments.service';

export const COMMENTS_FIXTURE: RDevComment[] =  [
	{
		id: 1,
		avatarURL: '../../assets/icons/SVG/pacman.svg',
		authorID: '1',
		authorName: 'Bridgekeeper',
		text: 'What is your favorite color?',
		removed: false,
		created_at: '2017-06-28T16:24:41.370Z',
		replies:[
			{
				id: 2,
				avatarURL: '../../assets/icons/SVG/happy.svg',
				authorID: '2',
				authorName: 'Lancelot',
				text: 'Blue.',
				removed: false,
				created_at: '2017-06-28T16:24:41.370Z',
				replies: [
					{
						id: 3,
						avatarURL: '../../assets/icons/SVG/pacman.svg',
						authorID: '1',
						authorName: 'Bridgekeeper',
						text: 'Right, off you go.',
						removed: false,
						created_at: '2017-06-28T16:24:41.370Z',
					}
				]
			},
		],
	}
];

@Component({
	selector: 'home-component',
	template: `
		<h1>Home</h1>
		<rdev-comments-component (onReply)="addReply($event)" (onComment)="addComment($event)" [userID]="demoUser.id" [comments]="comments" title="Demo Comments!"></rdev-comments-component>
	`
})

export class HomeComponent {
	public comments: RDevComment[] = COMMENTS_FIXTURE;
	public demoUser = {
		id: '3',
		avatarURL: '../../assets/icons/SVG/switch.svg',
		name: 'Demo User'
	};
	constructor(private commentsService: CommentsService){}
	public addComment(event): void {
		this.comments = this.commentsService.updateComments(event, this.demoUser, this.comments);
	}

	public addReply(event): void {
		this.comments = this.commentsService.updateWithReply(event, this.demoUser, this.comments);
	}
}

