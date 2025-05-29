import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "src/app/models/post";
import { TokenData } from "src/app/models/token";
import { User } from "src/app/models/user";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private apiUrl = environment.API_URL;

	constructor(private http: HttpClient) {}

	createUser(user: User) {
		const apiRoute = `${this.apiUrl}/users`;

		return this.http.post<User>(apiRoute, user);
	}

	loginUser(user: User) {
		const apiRoute = `${this.apiUrl}/login`;

		return this.http.post<string>(apiRoute, user);
	}

	deleteAccount(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}`;

		return this.http.delete<null>(apiRoute);
	}

	createPost(data: Post) {
		const apiRoute = `${this.apiUrl}/posts`;

		return this.http.post<Post>(apiRoute, data);
	}

	getPosts() {
		const apiRoute = `${this.apiUrl}/posts`;

		return this.http.get<Post[]>(apiRoute);
	}

	likePost(postID: number) {
		const apiRoute = `${this.apiUrl}/posts/${postID}/like`;

		return this.http.post<null>(apiRoute, null);
	}

	getUser(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}`;

		return this.http.get<User>(apiRoute);
	}

	searchUsers(userName: string) {
		const apiRoute = `${this.apiUrl}/users?user=${userName}`;

		return this.http.get<User[]>(apiRoute);
	}

	followUser(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}/follow`;

		return this.http.post<null>(apiRoute, null);
	}

	unfollowUser(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}/unfollow`;

		return this.http.post<null>(apiRoute, null);
	}
}
