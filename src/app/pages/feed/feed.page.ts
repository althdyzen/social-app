import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post/post.service";
import { ToastService } from "src/app/services/toast/toast.service";

@Component({
	selector: "app-feed",
	templateUrl: "./feed.page.html",
	styleUrls: ["./feed.page.scss"],
	standalone: false,
})
export class FeedPage implements OnInit {
	posts: Post[] = [];
	isLoading: boolean = true;

	constructor(
		private postService: PostService,
		private toastService: ToastService,
	) {}

	ngOnInit() {
		this.postService.getPosts().subscribe({
			next: (posts: Post[]) => {
				this.posts = posts;
				this.isLoading = false;
			},
			error: () => {
				this.toastService.presentToast({ message: "Ocorreu um erro ao carregar os posts.", color: "danger" });
				this.isLoading = false;
			},
		});
	}

	onPostCreated(post: Post) {
		this.posts.unshift(post);
	}
}
