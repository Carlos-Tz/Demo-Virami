import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  save = 2;
  Form: Form[];
  data_ = false;
  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.api.GetFormsList().snapshotChanges().subscribe(data => {
      this.Form = [];
      data.forEach(item => {
        let form_ = item.payload.toJSON();
        form_['$key'] = item.key;
        this.Form.push(form_ as Form);
      });
      this.data_ = true;
      console.log(this.Form);
    });

  }

}
