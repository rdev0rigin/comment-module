import {Component,} from '@angular/core';
import '../styles/main.scss';
import * as io from 'socket.io-client';

@Component({
	selector: 'main',
	template: `
		<div class='container'>
			<router-outlet></router-outlet>
		</div>
	`,
	})

export class MainComponent {

}
