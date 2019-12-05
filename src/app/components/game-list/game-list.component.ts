import {Component, Input, OnInit} from '@angular/core';
import {ApiInterface} from '../../interfaces/ApiInterface';
import {ApiServiceService} from '../../services/api-service.service';
import { faEdit, faWindowClose, faCheck } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  searchString: string;
  games: ApiInterface [] = [];
  genres: any[];
  page: number;
  pageSize: number;
  faEdit = faEdit;
  faCancel = faWindowClose;
  faCheck = faCheck;
  idprueba: {id: number; name: string; summary: string; url: string; rating: number, genres: any[]; };
  modalRef: NgbModalRef;
  rating: number;
  formGroup: FormGroup;


  constructor(private apiService: ApiServiceService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.pageSize = 10;
    this.page = 1;
    this.idprueba = {
      id: null,
      name: '',
      summary: '',
      url: '',
      rating: null,
      genres: []
    };
    this.searchString='';

  }

  ngOnInit() {
    this.apiService.data$.subscribe((data) => {
      this.games = data;
      console.log(this.games);
    });
    this.apiService.genres$.subscribe(data => {
      this.genres = data;
      console.log(this.genres);
    });
    this.apiService.searchString$.subscribe(data => {
      this.searchString = data;
      console.log(this.searchString);
    });
  }

  openModal(content, id, name, summary, url, rating) {

    this.idprueba = {
      id,
      name,
      summary,
      url,
      rating,
      genres: []

    };
    this.formGroup = this.formBuilder.group({
      id: [this.idprueba.id],
      name: [this.idprueba.name],
      summary: [this.idprueba.summary],
      image: [this.idprueba.url],
      rating: [],
      genres: [[]]
    });
    this.modalRef = this.modalService.open(content);

  }

  editGame(values) {
    this.apiService.updateGame(values);
    this.modalRef.close();
  }

  deleteGame(values) {
    this.apiService.deleteGame(values.id);
  }

}
