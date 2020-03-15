import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //this is Typescript
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; //without the ts extention /this is a typescript feature

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent //we declare all of our components in our AppModule so it is recognizes it
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
