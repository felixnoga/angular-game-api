import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ApiInterface} from '../interfaces/ApiInterface';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public games: ApiInterface[];
  genres: any[];
  private dataSource = new BehaviorSubject<ApiInterface[]>([] as any);
  private genreSource = new BehaviorSubject([]);
  private searchSource = new BehaviorSubject('');

  data$ = this.dataSource.asObservable();
  genres$ = this.genreSource.asObservable();
  searchString$ = this.searchSource.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {

    this.httpClient.get('http://localhost:8000/').subscribe((data: ApiInterface[]) => {
      this.games = data;
      this.dataSource.next(data);
    });
    this.httpClient.get('http://localhost:8000/genres').subscribe((data: ApiInterface[]) => {
      this.genres = data;
      this.genreSource.next(data);
    });
  }

  editGame(id, name, summary, url, rating) {
    const index = this.games.findIndex(game => game.id === id);
    const game = this.games[index];
    game.name = name;
    game.summary = summary;
    game.cover.url = url;
    game.total_rating = rating;
    console.log(this.games[index]);
  }

  updateGame(values) {
    const index = this.games.findIndex(game => game.id === values.id);
    const game = this.games[index];
    game.name = values.name;
    game.summary = values.summary;
    game.cover.url = values.image;
    game.total_rating = values.rating;
    game.genres = [];
    const genresp = [];
    values.genres.forEach(id => {
      const indexGenre = this.genres.findIndex( genre => genre.id === parseInt(id, 10));
      game.genres.push(this.genres[indexGenre]);
    });
  }

  deleteGame(id) {
    const index = this.games.findIndex(game => game.id === id);
    this.games.splice(index, 1);
  }

  createGame(game) {
    const id = Math.floor(Math.random()*100);
    const coverID = Math.floor(Math.random()*100);
    console.log(game);
    const newGame = {
      id,
      name: game.name,
      summary: game.summary,
      genres: [],
      total_rating: game.rating,
      platforms: [{id: 6, name: 'PC (Microsoft Windows)'}],
      cover: {
        id: coverID,
        height: '400',
        url: game.image
      }
    };

    game.genres.forEach( genre => {
      const index = this.genres.findIndex(g => g.id === parseInt(genre, 10));
      newGame.genres.push(this.genres[index]);
    });
    this.games.push(newGame);
    this.router.navigate(['/']);
  }

  changeSearchString(value) {
    this.searchSource.next(value);
  }
}

