import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { authInterceptor } from "./interceptors/auth";
import { loggerInterceptor } from "./interceptors/logger";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		provideHttpClient(withInterceptors([authInterceptor, loggerInterceptor])),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
