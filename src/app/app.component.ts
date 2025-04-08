import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularGithubPagesTest';

  protected Play_Audio(): void {
    new Audio('./audio/page-flip-47177.mp3').play()
  }
}
