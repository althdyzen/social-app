import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UserPageRoutingModule } from "./user-routing.module";

import { PostCardComponent } from "../../components/post-card/post-card.component";
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";
import { UserPage } from "./user.page";
import { PostCardSkeletonComponent } from "src/app/components/post-card-skeleton/post-card-skeleton.component";
import { ProfileCardSkeletonComponent } from "src/app/components/profile-card-skeleton/profile-card-skeleton.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		UserPageRoutingModule,
		ProfileCardComponent,
		PostCardComponent,
		PostCardSkeletonComponent,
		ProfileCardSkeletonComponent,
		NgxPaginationModule,
	],
	declarations: [UserPage],
})
export class UserPageModule {}
