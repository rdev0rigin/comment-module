import {Component} from '@angular/core';
import {Comment} from './comments.component';

export const COMMENTS_FIXTURE: Comment[] =  [
	{
		id: 1,
		avatarURL: '../../assets/icons/SVG/pacman.svg',
		authorID: '1',
		authorName: 'Bridgekeeper',
		text: 'What is your favorite color?',
		removed: false,
		created_at: '1498620029729',
		replyOf: '',
	},
	{
		id: 2,
		avatarURL: '../../assets/icons/SVG/happy.svg',
		authorID: '2',
		authorName: 'Lancelot',
		text: 'Blue.',
		removed: false,
		created_at: '1498620082577',
		replyOf: '',
	},
	{
		id: 3,
		avatarURL: '../../assets/icons/SVG/pacman.svg',
		authorID: '1',
		authorName: 'Bridgekeeper',
		text: 'Right, off you go.',
		removed: false,
		created_at: '1498620095264',
		replyOf: '',
	}
];

@Component({
	selector: 'home-component',
	template: `
		<h1>Home</h1>
		<rdev-comments-component (onComment)="addComment($event)" [userID]="demoUser.id" [comments]="comments" title="Demo Comments!"></rdev-comments-component>
	`
})

export class HomeComponent {
	public comments: Comment[] = COMMENTS_FIXTURE;
	public demoUser = {
		id: '3',
		avatarURL: '../../assets/icons/SVG/switch.svg',
		name: 'Demo User'
	};
	public addComment(event): void {
		const COMMENT: Comment = {
			id: this.comments.length + 1,
			avatarURL: this.demoUser.avatarURL,
			authorID: this.demoUser.id,
			authorName: this.demoUser.name,
			text: event,
			removed: false,
			created_at: Date.now(),
			replyOf: null
		};
		this.comments.push(COMMENT);
	}
}