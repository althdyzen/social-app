import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { authenticatedGuard } from "./guards/authenticated.guard";

const routes: Routes = [
	{
		path: "home",
		loadChildren: () => import("./pages/home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "signup",
		loadChildren: () => import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
	},
	{
		path: "signin",
		loadChildren: () => import("./pages/signin/signin.module").then((m) => m.SigninPageModule),
	},
	{
		path: "",
		canActivate: [authenticatedGuard],
		loadChildren: () => import("./pages/logged/logged.module").then((m) => m.LoggedPageModule),
	},
	{
		path: "**",
		redirectTo: "home",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
