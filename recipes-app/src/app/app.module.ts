import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppinglistEditComponent } from './shoppinglist/shoppinglist-edit/shoppinglist-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ShoppinglistEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ShoppinglistEditComponent,
    RecipeDetailComponent]
})
export class AppModule { }
