import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LoggedPageRoutingModule } from "./logged-routing.module";

import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { LoggedPage } from "./logged.page";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, LoggedPageRoutingModule, SearchBarComponent],
	declarations: [LoggedPage],
})
export class LoggedPageModule {}
