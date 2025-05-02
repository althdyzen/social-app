export interface Post {
	id: number;
	title: string;
	body: string;
	likes: number;
	authorID: number;
	authorName: string;
	authorNick: string;
	isAuthor: boolean;
	createdAt: Date;
}
