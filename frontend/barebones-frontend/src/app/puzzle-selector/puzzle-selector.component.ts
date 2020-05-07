import { Component, OnInit } from '@angular/core';
import { SchemaService } from '../schema.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-puzzle-selector',
  templateUrl: './puzzle-selector.component.html',
  styleUrls: ['./puzzle-selector.component.scss']
})
export class PuzzleSelectorComponent implements OnInit {

  puzzleNames: string[];
  puzzles$: Observable<any>[];
  selectedIndex: 0;

  constructor(private schemaService: SchemaService) { }

  ngOnInit(): void {
    this.getPuzzles();
  }

  getPuzzles(): void {
    Object.assign(this, this.schemaService.getAllPuzzles());
  }

  getPuzzleIndex(name: string) {
    return this.puzzleNames.findIndex(n => n === name);
  }
}
