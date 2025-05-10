import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FeedPageRoutingModule } from "./feed-routing.module";

import { CreatePostCardComponent } from "src/app/components/create-post-card/create-post-card.component";
import { PostCardComponent } from "src/app/components/post-card/post-card.component";
import { FeedPage } from "./feed.page";
import { PostCardSkeletonComponent } from "src/app/components/post-card-skeleton/post-card-skeleton.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		FeedPageRoutingModule,
		ReactiveFormsModule,
		PostCardComponent,
		CreatePostCardComponent,
		PostCardSkeletonComponent,
	],
	declarations: [FeedPage],
})
export class FeedPageModule {}
