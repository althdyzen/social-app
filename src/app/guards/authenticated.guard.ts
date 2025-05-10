import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

export const authenticatedGuard: CanActivateFn = (route, state) => {
	const authService = inject(AuthService);
	const router = inject(Router);

	if (!authService.hasToken()) {
		console.log("Não tem token");
		router.navigate(["/signin"]);
		return false;
	}

	if (state.url === "/") {
		router.navigate(["/feed"]);
		return false;
	}

	return true;
};
