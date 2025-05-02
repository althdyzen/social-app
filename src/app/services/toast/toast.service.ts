import { Injectable } from "@angular/core";
import { ToastController, ToastOptions } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class ToastService {
	constructor(private toastController: ToastController) {}

	async presentToast({ message = "Ocorreu um erro", color = "danger" }: ToastOptions) {
		const toast = await this.toastController.create({
			message: message,
			duration: 2000,
			position: "top",
			cssClass: "text-center",
			color: color,
		});

		await toast.present();
	}
}
