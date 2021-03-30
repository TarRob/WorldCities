import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule],
})
export class AngularMaterialModule {}
