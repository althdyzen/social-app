import { Post } from "./post";

export interface User {
	id: number;
	name: string;
	nick: string;
	email: string;
	password: string;
	isOwner: string;
	isFollowing: boolean;
	followers: number;
	following: number;
	posts: Post[];
	createdAt: Date;
}
