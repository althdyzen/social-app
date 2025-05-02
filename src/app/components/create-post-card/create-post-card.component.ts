import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post/post.service";
import { ToastService } from "src/app/services/toast/toast.service";

@Component({
	selector: "create-post-card",
	templateUrl: "./create-post-card.component.html",
	styleUrls: ["./create-post-card.component.scss"],
	imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class CreatePostCardComponent implements OnInit {
	postForm!: FormGroup;
	constructor(
		private formBuilder: FormBuilder,
		private postService: PostService,
		private toastService: ToastService,
	) {}

	ngOnInit() {
		this.postForm = this.formBuilder.group({
			title: ["", [Validators.required]],
			body: ["", [Validators.required]],
		});
	}

	createPost() {
		if (this.postForm.invalid) {
			this.toastService.presentToast({ message: "Um post precisa ter um título e um conteúdo.", color: "danger" });
			return;
		}

		this.postService.create(this.postForm.value).subscribe({
			next: (post: Post) => {
				this.toastService.presentToast({ message: "Post criado com sucesso!", color: "success" });

				this.postForm.reset();
			},
			error: (err) => {
				this.toastService.presentToast({ message: "Ocorreu um erro ao criar o post.", color: "danger" });

				console.log(err);
			},
		});
	}
}
