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
    this.formsList = this.db.list('virami/client-list');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('virami/client-list/' + key);
    return this.formObject;
  }

  UpdateForm(form: Form, key: string) {
    this.db.object('virami/client-list/' + key)
    .update(form);
  }

  DeleteForm(key: string) {
    this.formObject = this.db.object('virami/client-list/' + key);
    /* this.formObject = this.db.object('ordenes/' + key); */
    this.formObject.remove();
  }
}
