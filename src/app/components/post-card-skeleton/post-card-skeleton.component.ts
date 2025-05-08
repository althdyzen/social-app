import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
	selector: "post-card-skeleton",
	templateUrl: "./post-card-skeleton.component.html",
	styleUrls: ["./post-card-skeleton.component.scss"],
	imports: [CommonModule, IonicModule],
})
export class PostCardSkeletonComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
