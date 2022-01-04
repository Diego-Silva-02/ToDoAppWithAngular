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

    this.toDos.push(new ToDo(1, 'Walk with the dog', false));
    this.toDos.push(new ToDo(2, 'Go to market', false));
    this.toDos.push(new ToDo(3, 'Have a haircut', true));
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