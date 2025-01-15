import { Component, input } from '@angular/core';

@Component({
  selector: 'app-params',
  imports: [],
  templateUrl: './params.component.html',
  styleUrl: './params.component.scss'
})
export class ParamsComponent {
  params = input.required<string>();
}
