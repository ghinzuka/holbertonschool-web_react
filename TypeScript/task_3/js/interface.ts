// task_3/js/interface.ts

// Export the type RowID and the interface RowElement
export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}