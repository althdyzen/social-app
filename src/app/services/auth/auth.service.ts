import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private token: string | null = localStorage.getItem("token");

	setToken(token: string) {
		this.token = token;

		localStorage.setItem("token", token);
	}

	hasToken() {
		return !!this.token;
	}

	getToken() {
		return this.token;
	}

	removeToken() {
		this.token = null;
		localStorage.removeItem("token");
	}
}
