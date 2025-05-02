import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast/toast.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
	selector: "app-signin",
	templateUrl: "./signin.page.html",
	styleUrls: ["./signin.page.scss"],
	standalone: false,
})
export class SigninPage implements OnInit {
	signingIn: boolean = false;
	signInForm!: FormGroup;
	constructor(
		private formBuilder: FormBuilder,
		private toastService: ToastService,
		private userService: UserService,
		private router: Router,
	) {}

	ngOnInit() {
		this.signInForm = this.formBuilder.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required]],
		});
	}

	signin() {
		if (this.signInForm.invalid) {
			const message = "Preencha todos os campos corretamente.";
			this.toastService.presentToast({ message: message, color: "danger" });

			return;
		}
		this.signingIn = true;

		this.userService.login(this.signInForm.value).subscribe({
			next: () => {
				this.toastService.presentToast({ message: "Login realizado com sucesso!", color: "success" });
				this.signingIn = false;
				this.router.navigate(["/feed"]);
			},
		});
	}
}
