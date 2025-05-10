import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user/user.service";

@Component({
	selector: "search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.scss"],
	imports: [CommonModule, IonicModule, RouterModule],
})
export class SearchBarComponent implements OnInit {
	users: User[] = [];
	constructor(private userService: UserService) {}

	ngOnInit() {}

	search(event: CustomEvent) {
		this.userService.search(event.detail.value).subscribe({
			next: (users: User[]) => {
				this.users = users;
			},
			error: (err) => {
				console.log(err);
			},
		});
	}
}
