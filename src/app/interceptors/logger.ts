import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { delay, Observable } from "rxjs";

export function loggerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	console.groupCollapsed("Logger Interceptor");
	console.log(req);
	console.groupEnd();

	const randDelay = Math.floor(Math.random() * 1000);

	return next(req).pipe(delay(randDelay));
}
