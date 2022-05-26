import {Injectable} from '@angular/core';
import {Course} from "../models/course";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class CoursesService {

	// private readonly API = '/assetss/carga-de-dados-teste-lista-de-cursos.json' //  nome errado de propsoito pra teste
	private readonly API = '/assets/carga-de-dados-teste-lista-de-cursos.json'//   <= caminho certo da API

	constructor(private httpClient: HttpClient) {
	}

	listCourses() {
		return this.httpClient.get<Course[]>(this.API)
			.pipe(
				tap(courses =>
					console.log(courses)
				)
			);
	}
}

