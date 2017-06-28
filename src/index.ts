import './polyfills.browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RDevCommentModule} from './app/rdev-comment.module';
export const platformRef = platformBrowserDynamic();

export function main() {
	return platformRef.bootstrapModule(RDevCommentModule)
		.catch(err => console.error(err));
}

// support async tag or hmr
switch (document.readyState) {
	case 'interactive':
	case 'complete':
		//enableProdMode();
		main();
		break;
	case 'loading':
	default:
		document.addEventListener('DOMContentLoaded', () => main());
}
