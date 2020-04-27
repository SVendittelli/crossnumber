import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-content',
  templateUrl: './default-content.component.html',
  styleUrls: ['./default-content.component.scss']
})
export class DefaultContentComponent {

  @Input() title;

}