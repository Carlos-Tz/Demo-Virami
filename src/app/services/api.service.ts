import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  formsList: AngularFireList<any>;
  formObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddForm(form: object) {
    this.formsList.push(form as Form);
  }

  GetFormsList() {
    this.formsList = this.db.list('didocu');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('didocu/' + key);
    return this.formObject;
  }

  UpdateForm(form: Form, key: string) {
    this.db.object('didocu/' + key)
    .update(form);
  }
}
