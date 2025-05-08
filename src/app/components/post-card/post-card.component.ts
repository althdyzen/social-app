import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Post } from "src/app/models/post";
import { NickPipe } from "src/app/pipes/nick/nick.pipe";
import { PostDatePipe } from "src/app/pipes/post-date/post-date.pipe";
import { PostService } from "src/app/services/post/post.service";
import { ToastService } from "src/app/services/toast/toast.service";

@Component({
	selector: "post-card",
	templateUrl: "./post-card.component.html",
	styleUrls: ["./post-card.component.scss"],
	imports: [CommonModule, IonicModule, NickPipe, PostDatePipe],
})
export class PostCardComponent implements OnInit {
	@HostBinding("class") class = "max-w-full";

	@Input() post: Post = {} as Post;
	@Input() authorName: string = "";
	@Input() authorNick: string = "";
	isLiking: boolean = false;

	constructor(
		private postService: PostService,
		private toastService: ToastService,
	) {}

	ngOnInit() {}

	like() {
		this.isLiking = true;
		this.postService.like(this.post.id).subscribe({
			next: () => {
				this.post.likes += 1;

				setTimeout(() => {
					this.isLiking = false;
				}, 150);
			},
			error: () => {
				this.toastService.presentToast({ message: "Ocorreu um erro ao curtir o post." });
			},
		});
	}
}
