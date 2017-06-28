import {Injectable} from '@angular/core';
import {RDevComment} from '../models/comment.model';
@Injectable()
export class CommentsService {

	public updateComments(event, userInfo, comments): RDevComment[] {
		const COMMENT: RDevComment = {
			id: Date.now(),
			avatarURL: userInfo.avatarURL,
			authorID: userInfo.id,
			authorName: userInfo.name,
			text: event,
			removed: false,
			created_at: new Date(Date.now()).toISOString(),
		};
		return [COMMENT, ...comments];
	}

	public updateWithReply(event, userInfo, comments): RDevComment[] {
		const REPLY = {
			id: Date.now(),
			avatarURL: userInfo.avatarURL,
			authorID: userInfo.id,
			authorName: userInfo.name,
			text: event.text,
			removed: false,
			created_at: new Date(Date.now()).toISOString(),
			reply_owner_id: event.parentComment.id
		};
		console.log('Reply', REPLY);
		return this.recursiveReplyInsert(comments, REPLY);
	}

	private recursiveReplyInsert(comments, reply): RDevComment[] {
		for (let comment of comments){
			if (comment.id === reply.reply_owner_id) {
				comment.replies ? comment.replies = [reply, ...comment.replies] : comment.replies = [reply];
				return comments
			}
			if (comment.replies){
				return this.recursiveReplyInsert(comment.replies, reply);
			}
		}
	}
}