import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Form } from 'src/app/models/form';
import { MatTableDataSource, MatPaginator, MatSort, MatInput } from '@angular/material';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit {
  public dataSource = new MatTableDataSource<Form>();
  save = 2;
  Form: Form[];
  data = false;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('input', {static: false}) input: ElementRef;

  displayedColumns: any[] = [
    'fecha',
    'nombre',
    'tel',
    'action'
  ];
  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.api.GetFormsList().snapshotChanges().subscribe(data => {
      this.Form = [];
      data.forEach(item => {
        let f = item.payload.toJSON();
        f['$key'] = item.key;
        this.Form.push(f as Form);
      });
      if (this.Form.length > 0) {
        this.data = true;
        console.log(this.Form);
      }
      /* Data table */
      this.dataSource.data = this.Form;
      /* Pagination */
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
