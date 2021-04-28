import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-toggler',
  templateUrl: './language-toggler.component.html',
  styleUrls: ['./language-toggler.component.css'],
})
export class LanguageTogglerComponent implements OnInit {
  constructor() {}

  public languages: string[] = ['EN', 'PL'];
  public languageSelected: string = this.languages[0];

  ngOnInit(): void {}
}
