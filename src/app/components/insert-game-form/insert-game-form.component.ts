import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-insert-game-form',
  templateUrl: './insert-game-form.component.html',
  styleUrls: ['./insert-game-form.component.scss']
})
export class InsertGameFormComponent implements OnInit {

  formGroup: FormGroup;
  genres: {id: number; name:string}[];
  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: [''],
      rating: [],
      summary: [''],
      image: [''],
      genres: [[]]
    });
    apiService.genres$.subscribe(data => {
      this.genres = data;
    });
  }

  ngOnInit() {
  }

  insertGame(values) {
    this.apiService.createGame(values);
  }

}
