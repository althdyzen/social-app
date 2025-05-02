import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { User } from "src/app/models/user";
import { ToastService } from "src/app/services/toast/toast.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
	selector: "profile-card",
	templateUrl: "./profile-card.component.html",
	styleUrls: ["./profile-card.component.scss"],
	imports: [CommonModule, IonicModule],
})
export class ProfileCardComponent implements OnInit {
	@Input() user!: User;
	popoverOpen: boolean = false;
	isDeleteModalOpen: boolean = false;
	followStage: boolean = false;
	deleteModalButtons = [
		{ text: "Cancelar", role: "cancel" },
		{ text: "Excluir", role: "confirm", handler: () => this.deleteAccount() },
	];

	constructor(
		private toastService: ToastService,
		private userService: UserService,
		private router: Router,
	) {}

	ngOnInit() {}

	logout() {
		this.popoverOpen = false;
		this.toastService.presentToast({ message: "Deslogado.", color: "success" });
		this.userService.logout();
		this.router.navigate(["/signin"]);
	}

	follow() {
		this.followStage = true;
		this.userService.follow(this.user.id).subscribe({
			next: () => {
				this.user.isFollowing = true;
				this.user.followers += 1;
				this.followStage = false;
			},
			error: () => {
				this.followStage = false;
				this.toastService.presentToast({ message: "Ocorreu um erro ao seguir o usuário.", color: "danger" });
			},
		});
	}

	unfollow() {
		this.followStage = true;
		this.userService.unfollow(this.user.id).subscribe({
			next: () => {
				this.user.isFollowing = false;
				this.user.followers -= 1;
				this.followStage = false;
			},
			error: () => {
				this.followStage = false;
				this.toastService.presentToast({ message: "Ocorreu um erro ao deixar de seguir o usuário.", color: "danger" });
			},
		});
	}

	toggleFollow() {
		if (this.user.isFollowing) {
			this.unfollow();
		} else {
			this.follow();
		}
	}

	openDeleteModal() {
		this.isDeleteModalOpen = true;
	}

	deleteAccount() {
		this.userService.delete(this.user.id).subscribe({
			next: () => {
				this.toastService.presentToast({ message: "Conta excluida.", color: "success" });
				this.userService.logout();
				this.router.navigate(["/signin"]);
			},
			error: (err) => {
				this.toastService.presentToast({ message: "Ocorreu um erro ao excluir a conta.", color: "danger" });
			},
		});
	}
}
