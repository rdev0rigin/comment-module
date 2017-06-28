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
		created_at: '',
		replyOf: '',
	},
	{
		id: 2,
		avatarURL: '../../assets/icons/SVG/happy.svg"',
		authorID: '2',
		authorName: 'Lancelot',
		text: 'Blue.',
		removed: false,
		created_at: '',
		replyOf: '',
	},
	{
		id: 3,
		avatarURL: '../../assets/icons/SVG/pacman.svg">',
		authorID: '1',
		authorName: 'Bridgekeeper',
		text: 'Right, off you go.',
		removed: false,
		created_at: '',
		replyOf: '',
	}
];

@Component({
	selector: 'home-component',
	template: `
		<h1>Home</h1>
		<rdev-comments-component [comments]="comments" title="Demo Comments!"></rdev-comments-component>
	`
})

export class HomeComponent {
	public comments: Comment[] = COMMENTS_FIXTURE;
}