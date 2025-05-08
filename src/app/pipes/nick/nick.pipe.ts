import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "nick",
})
export class NickPipe implements PipeTransform {
	transform(nick: string): string {
		return `@${nick}`;
	}
}
