export interface RDevComment {
	id: string | number;
	avatarURL: string;
	authorID: string | number;
	authorName: string;
	text: string;
	removed: boolean;
	created_at: string | number;
	reply_owner_id?: string | number;
	replies?: RDevComment[];
}
