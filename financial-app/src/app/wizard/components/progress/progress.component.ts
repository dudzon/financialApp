import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() progressValue!: string;

  constructor() {}

  ngOnInit(): void {}
}
