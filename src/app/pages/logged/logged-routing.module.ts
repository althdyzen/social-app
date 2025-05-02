import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoggedPage } from "./logged.page";

const routes: Routes = [
	{
		path: "",
		component: LoggedPage,
		children: [
			{
				path: "user/:userID",
				loadChildren: () => import("src/app/pages/user/user.module").then((m) => m.UserPageModule),
			},
			{
				path: "user",
				title: "Perfil",
				loadChildren: () => import("src/app/pages/user/user.module").then((m) => m.UserPageModule),
			},
			{
				path: "feed",
				title: "Feed",
				loadChildren: () => import("src/app/pages/feed/feed.module").then((m) => m.FeedPageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoggedPageRoutingModule {}
