import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CoursesService} from "../services/courses.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

	dataHoraAtualizacaoDados?: Date;
	// o cifrão é uma convenção para indicar que a variavel recebe um observable
	dadosDaTabela$: Observable<Course[]>;
	// define a ordem de exibicao dos rotulos das tabelas, deve bater com o nome de cada ng-container
	rotulosDaTabela: string[] = ['name', 'category'];

	constructor(
		private coursesService: CoursesService,
		public dialog: MatDialog
	) {
		this.dadosDaTabela$ = coursesService.listCourses()
			.pipe(
				catchError(() => {
					this.onError('Erro ao carregar dados!')
						return of([]);
					}
				)
			);
	}

	onError(errorMsg: string) {
		this.dialog.open(ErrorDialogComponent, {
			data: errorMsg
		})
	}

	ngOnInit(): void {
		//tabela preenchida com dados fake, apenas para modelagem
		this.dataHoraAtualizacaoDados = this.atualizaDataListagem();
	}

	atualizaDataListagem(): Date {
		return new Date()
	}

	exibeLinhaClicada(curso: Course) {
		console.log("linha da tabela que foi clicada:");
		console.log(curso);
		console.log("Campos de cada objeto");
		console.log("Categoria:");
		console.log(curso.category);
		console.log("Id:");
		console.log(curso._id);
		console.log("Nome do Curso");
		console.log(curso.name);
	}
}
