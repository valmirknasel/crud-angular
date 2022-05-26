import { Pipe, PipeTransform } from '@angular/core';
import { CourseCategory } from "../../courses/models/CourseCategory";

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      //caso value == 'nome-do-curso' retorna o nome do icone correspondente
      case CourseCategory.FRONT_END: return 'code';
      case CourseCategory.BACK_END: return 'terminal';
    }
    return 'school';
  }

}
