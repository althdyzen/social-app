import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "postDate",
})
export class PostDatePipe implements PipeTransform {
	months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"];

	transform(value: Date): string {
		const date = new Date(value);
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		const seconds = date.getSeconds().toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		const month = this.months[date.getMonth()];
		const year = date.getFullYear();

		return `${hours}:${minutes}:${seconds} - ${day} ${month}, ${year}`;
	}
}
