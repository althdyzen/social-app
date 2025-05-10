import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";
import { AuthService } from "../auth/auth.service";
import { ToastService } from "../toast/toast.service";
import { Router } from "@angular/router";

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
		return this.apiService.loginUser(user);
	}

	delete(userID: number) {
		return this.apiService.deleteAccount(userID);
	}

	logout() {
		this.authService.removeToken();
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
