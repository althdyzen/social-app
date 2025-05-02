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
	user: User = {} as User;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private titleService: Title,
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			const id = Number(params.get("userID"));

			this.userService.get(id).subscribe({
				next: (user: User) => {
					this.user = user;

					this.titleService.setTitle(`@${this.user.nick} - Perfil`);
				},
				error: (err) => {
					console.log(err);
				},
			});
		});
	}
}
