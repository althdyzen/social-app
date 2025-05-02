import { Injectable } from "@angular/core";
import { Post } from "src/app/models/post";
import { ApiService } from "../api/api.service";
import { ToastService } from "../toast/toast.service";

@Injectable({
	providedIn: "root",
})
export class PostService {
	constructor(
		private apiService: ApiService,
		private toastService: ToastService,
	) {}

	create(post: Post) {
		return this.apiService.createPost(post);
	}

	getPosts() {
		return this.apiService.getPosts();
	}

	like(postID: number) {
		return this.apiService.likePost(postID);
	}
}
