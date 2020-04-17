import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss']
})
export class CollapsiblePanelComponent implements OnInit {

  @Input() startsCollapsed;

  isCollapsed;

  constructor() { }

  ngOnInit(): void {
    this.isCollapsed = this.startsCollapsed;
  }

}
