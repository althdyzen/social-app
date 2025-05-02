import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";
import { AuthService } from "../auth/auth.service";

@Injectable({
	providedIn: "root",
})
export class UserService {
	constructor(
		private apiService: ApiService,
		private authService: AuthService,
	) {}

	create(user: User) {
		return this.apiService.createUser(user);
	}

	login(user: User) {
		return new Observable<void>((observer) => {
			this.apiService.loginUser(user).subscribe({
				next: (data: string) => {
					this.authService.setToken(data);

					observer.next();
					observer.complete();
				},
				error: (err) => {
					console.log(err);
				},
			});
		});
	}

	delete(userID: number) {
		return this.apiService.deleteAccount(userID);
	}

	logout() {
		this.authService.removeToken();
	}

	getMe() {
		return this.apiService.getUserMe();
	}

	get(userID: number) {
		return this.apiService.getUser(userID);
	}

	follow(userID: number) {
		return this.apiService.followUser(userID);
	}

	unfollow(userID: number) {
		return this.apiService.unfollowUser(userID);
	}

	search(query: string) {
		return this.apiService.searchUsers(query);
	}
}
