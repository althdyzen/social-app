import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { ToastService } from "../services/toast/toast.service";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	const authToken = inject(AuthService);
	const toastService = inject(ToastService);
	const router = inject(Router);

	const isRegister = req.method === "POST" && req.url.endsWith("/users");
	const isLogin = req.url.endsWith("/login");

	if (isRegister || isLogin) {
		return next(req);
	}

	const clonedRequest = req.clone({
		headers: req.headers.set("Authorization", `Bearer ${authToken.getToken()}`),
	});

	return next(clonedRequest).pipe(
		tap({
			error: (err) => {
				if (err.error.erro === "Token is expired") {
					toastService.presentToast({ message: "A sua sessão expirou, faça o login novamente" });
					authToken.removeToken();
					router.navigate(["/signin"]);
				}
			},
		}),
	);
}
