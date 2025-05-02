import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { ToastService } from "src/app/services/toast/toast.service";
import { UserService } from "src/app/services/user/user.service";
import { validateSignUp } from "src/app/validators/signup";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.page.html",
	styleUrls: ["./signup.page.scss"],
	standalone: false,
})
export class SignupPage implements OnInit {
	signingup: boolean = false;

	signUpForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private toastService: ToastService,
		private userService: UserService,
		private router: Router,
	) {}

	ngOnInit() {
		this.signUpForm = this.formBuilder.group(
			{
				name: ["", [Validators.required]],
				nick: ["", [Validators.required]],
				email: ["", [Validators.required, Validators.email]],
				password: ["", [Validators.required]],
				confirmPassword: ["", [Validators.required]],
			},
			{ validators: validateSignUp() },
		);
	}

	signup() {
		if (this.signUpForm.invalid) {
			const message = this.signUpForm.errors?.["errorText"] || "Preencha todos os campos corretamente.";
			this.toastService.presentToast({ message: message, color: "danger" });

			return;
		}
		this.signingup = true;

		this.userService.create(this.signUpForm.value).subscribe({
			next: (user: User) => {
				this.toastService.presentToast({ message: "Cadastro realizado com sucesso!", color: "success" });
				this.signingup = false;
				this.router.navigate(["/signin"]);
			},
			error: (err) => {
				this.toastService.presentToast({ message: "Ocorreu um erro ao realizar o cadastro.", color: "danger" });
				this.signingup = false;
			},
		});
	}
}
