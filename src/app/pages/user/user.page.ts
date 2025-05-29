import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user/user.service";

@Component({
	selector: "app-user",
	templateUrl: "./user.page.html",
	styleUrls: ["./user.page.scss"],
	standalone: false,
})
export class UserPage implements OnInit {
	p: number = 1;
	user: User = {} as User;
	isLoading: boolean = true;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private titleService: Title,
	) {}

	ngOnInit() {
		this.user.id = Number(this.route.snapshot.paramMap.get("userID"));

		this.userService.get(this.user.id).subscribe({
			next: (user: User) => {
				this.user = user;
				this.isLoading = false;

				this.titleService.setTitle(`@${this.user.nick} - Perfil`);
			},
			error: (err) => {
				this.isLoading = false;

				console.log(err);
			},
		});
	}
}
