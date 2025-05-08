import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
	selector: "profile-card-skeleton",
	templateUrl: "./profile-card-skeleton.component.html",
	styleUrls: ["./profile-card-skeleton.component.scss"],
	imports: [CommonModule, IonicModule],
})
export class ProfileCardSkeletonComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
