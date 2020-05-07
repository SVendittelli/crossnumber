import { Observable } from 'rxjs';
import { SchemaService } from './../schema.service';
import { Component, OnInit, Input } from '@angular/core';
import { Puzzle, Clue, Cell, CellHelper } from '../schema';

@Component({
  selector: 'app-puzzle-grid',
  templateUrl: './puzzle-grid.component.html',
  styleUrls: ['./puzzle-grid.component.scss']
})
export class PuzzleGridComponent implements OnInit {

  puzzleVar: Puzzle;
  get puzzle() { return this.puzzleVar; }
  @Input() set puzzle(value: Puzzle) {
    if (value) {
      this.puzzleVar = value;
      this.initialiseClues();
    }
  }

  clues: { across: Clue[], down: Clue[] };
  clueNumbers: { value: number, pos: Cell, clues: Clue[] }[];
  cellsInUse: Cell[];

  constructor() { }

  ngOnInit(): void {
  }

  initialiseClues(): void {
    this.clues = { across: [], down: [] };
    this.clueNumbers = [];
    this.cellsInUse = [];
    for (const clue of this.puzzle.clues) {
      this.clues[clue.direction].push(clue);

      for (const cell of clue.cells) {
        if (!this.cellsInUse.find((c: Cell) => CellHelper.cellsEqual(c, cell))) {
          this.cellsInUse.push(cell);
        }
      }

      let clueNumber = this.clueNumbers.find(c => CellHelper.cellsEqual(c.pos, clue.cells[0]));
      if (!clueNumber) {
        clueNumber = { value: NaN, pos: clue.cells[0], clues: [] };
        this.clueNumbers.push(clueNumber);
      }
      clueNumber.clues.push(clue);
    }

    this.clueNumbers.sort((a, b) => CellHelper.compareCells(a.pos, b.pos));

    this.clueNumbers.forEach((num, i) => { num.value = i + 1; num.clues.forEach(c => c.number = i + 1); });

    for (const clues of [this.clues.across, this.clues.down]) {
      clues.sort((a, b) => a.number - b.number);
    }
  }

  makeArray(count: number): Array<number> { return [...Array(count).keys()]; }
  getIndex(arr: Array<any>, item: any): number { return arr.findIndex(i => i === item); }
}
