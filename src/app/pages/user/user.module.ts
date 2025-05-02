import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UserPageRoutingModule } from "./user-routing.module";

import { PostCardComponent } from "../../components/post-card/post-card.component";
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";
import { UserPage } from "./user.page";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, UserPageRoutingModule, ProfileCardComponent, PostCardComponent],
	declarations: [UserPage],
})
export class UserPageModule {}
