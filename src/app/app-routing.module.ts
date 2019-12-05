import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {InsertGameFormComponent} from './components/insert-game-form/insert-game-form.component';
import {GameListComponent} from './components/game-list/game-list.component';


const routes: Routes = [
  {path: '', component: GameListComponent},
  {path: 'new-game', component: InsertGameFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
