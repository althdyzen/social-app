import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "src/app/models/post";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth/auth.service";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private apiUrl = environment.API_URL;

	constructor(
		private http: HttpClient,
		private authService: AuthService,
	) {}

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

	getPostsMe() {
		const apiRoute = `${this.apiUrl}/posts/me`;

		return this.http.get<Post[]>(apiRoute);
	}

	likePost(postID: number) {
		const apiRoute = `${this.apiUrl}/posts/${postID}/like`;

		return this.http.post<null>(apiRoute, null);
	}

	getUserMe() {
		const apiRoute = `${this.apiUrl}/users/me`;

		return this.http.get<User>(apiRoute);
	}

	getUser(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}`;

		return this.http.get<User>(apiRoute);
	}

	searchUsers(userName: string) {
		const apiRoute = `${this.apiUrl}/users?user=${userName}`;

		return this.http.get<User[]>(apiRoute);
	}

	// getPostByUser(userID: number) {
	// 	const apiRoute = `${this.apiUrl}/users/${userID}/posts`;

	// 	return this.http.get<any>(apiRoute);
	// }

	followUser(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}/follow`;

		return this.http.post<null>(apiRoute, null);
	}

	unfollowUser(userID: number) {
		const apiRoute = `${this.apiUrl}/users/${userID}/unfollow`;

		return this.http.post<null>(apiRoute, null);
	}

	// getUserFollowers(userID: number) {
	// 	const apiRoute = `${this.apiUrl}/users/${userID}/followers`;

	// 	return this.http.get<any>(apiRoute);
	// }

	// getUserFollowing(userID: number) {
	// 	const apiRoute = `${this.apiUrl}/users/${userID}/following`;

	// 	return this.http.get<any>(apiRoute);
	// }

	getHeaders() {
		return new HttpHeaders({
			Authorization: `Bearer ${this.authService.getToken()}`,
		});
	}
}
