import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {ApiServiceService} from './services/api-service.service';
import {ApiInterface} from './interfaces/ApiInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchString: string;
  constructor(private apiService: ApiServiceService) {
    this.searchString = '';
  }

  ngOnInit() {
    this.apiService.searchString$.subscribe(data => {
      this.searchString = data;

    });
  }
  onChangeSearchString(value) {

    this.apiService.changeSearchString(value);

  }

}
