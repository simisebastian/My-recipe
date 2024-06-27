import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RecipeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Recipe-Book';
  show :boolean = true;
  widthPx=2;
  systemVolume = '              Hello World                 '
  name: any;
  
  onChange() {
    this.systemVolume = "   bfkdsfiwqgir frfi             "
  }

  showName(event : any ) {
    console.log(event);
    this.name = event
  }
}
