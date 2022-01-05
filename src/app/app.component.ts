import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDo } from 'src/models/toDo.model';

@Component({
  selector: 'app-root', //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public toDos: ToDo[] = [];
  public tittle: String = 'My tasks';
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tittle: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  add() {
    const tittle = this.form.controls['tittle'].value;
    const id = this.toDos.length + 1
    this.toDos.push(new ToDo(id, tittle, false))
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  delete(toDo: ToDo) {
    const index = this.toDos.indexOf(toDo);
    if (index !== -1) {
      this.toDos.splice(index, 1);
    }
  }

  markAsDone(toDo: ToDo) {
    toDo.done = true;
  }

  markAsUndone(toDo: ToDo) {
    toDo.done = false;
  }
}