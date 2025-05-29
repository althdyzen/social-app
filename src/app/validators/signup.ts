import { compileNgModule } from "@angular/compiler";
import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validateSignUp(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: string } | null => {
		const password = control.get("password")?.value;
		const confirmPassword = control.get("confirmPassword")?.value;
        console.log(password, confirmPassword)

		if (password !== confirmPassword) {
			return {
				errorText: "As senhas não coincidem.",
			};
		}

		return null;
	};
}
