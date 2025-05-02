import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validateSignUp(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: string } | null => {
		const password = control.get("password")?.value;
		const confirmPassword = control.get("confirmPassword")?.value;

		if (password !== confirmPassword) {
			return {
				errorText: "As senhas não coincidem.",
			};
		}

		return null;
	};
}
