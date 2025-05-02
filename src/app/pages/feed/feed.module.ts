import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FeedPageRoutingModule } from "./feed-routing.module";

import { CreatePostCardComponent } from "../../components/create-post-card/create-post-card.component";
import { PostCardComponent } from "../../components/post-card/post-card.component";
import { FeedPage } from "./feed.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		FeedPageRoutingModule,
		ReactiveFormsModule,
		PostCardComponent,
		CreatePostCardComponent,
	],
	declarations: [FeedPage],
})
export class FeedPageModule {}
