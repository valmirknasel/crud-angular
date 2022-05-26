import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { registerLocaleData } from "@angular/common"; // modulos para usar a formatacao de data com o pipe {{ dataAtual | date: 'dd//MM/yyyy HH:mm:ss'}}
import localePt from '@angular/common/locales/pt';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

registerLocaleData(localePt)

@NgModule({
	declarations: [],
	exports: [
		MatTableModule,
		MatCardModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule
	]
})
export class AppMaterialModule {
}
