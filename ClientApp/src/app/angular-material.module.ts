import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [MatTableModule, MatPaginatorModule],
  exports: [MatTableModule, MatPaginatorModule],
})
export class AngularMaterialModule {}
