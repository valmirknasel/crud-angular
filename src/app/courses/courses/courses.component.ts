import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

	dadosDaTabela: Course[] = [];
  colunasDaTabela: string[] = ['name','category'];

  constructor() { }

  ngOnInit(): void {
    this.dadosDaTabela = [
      {_id:'1', name: 'Curso Teste 1', category: 'Front-End'},
      {_id:'2', name: 'Curso Teste 2', category: 'Back-End'},
      {_id:'3', name: 'Curso Teste 3', category: 'Mid-End'}
    ]
  }

}
