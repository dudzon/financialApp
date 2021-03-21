import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  @Input()
  progressNumber!: string;
  constructor() {}

  ngOnInit(): void {}
}
