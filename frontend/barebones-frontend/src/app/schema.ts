export class Puzzle {
  metadata: Metadata;
  clues: Clue[];
}

export class Metadata {
  width: number;
  height: number;
}

export class Clue {
  id: string;
  direction: string;
  text: string;
  properties: string[];
  cells: Cell[];
  number?: number;
}

export class Cell {
  row: number;
  column: number;
}

export class CellHelper {
  static cellsEqual(a: Cell, b: Cell): boolean { return a.row === b.row && a.column === b.column; }
  static compareCells(a: Cell, b: Cell): number {
    if (CellHelper.cellsEqual(a, b)) { return 0; }
    else if (a.row < b.row || (a.row === b.row && a.column < b.column)) { return -1; }
    else { return 1; }
  }
}
