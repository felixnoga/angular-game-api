import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReplaceImagePipe } from './replace-image.pipe';
import { GameListComponent } from './components/game-list/game-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertGameFormComponent } from './components/insert-game-form/insert-game-form.component';
import {AppPipesModule} from './app-pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    UpdateModalComponent,
    ReplaceImagePipe,
    GameListComponent,
    InsertGameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
