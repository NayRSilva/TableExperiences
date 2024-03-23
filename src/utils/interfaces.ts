
export interface Column {
  key: string;
  title: string;
}

export interface ResizableTableProps {
  data: any[];
  columns: Column[];
}

export interface ResizableColumnHeaderProps {
  column: Column;
  onResize: (width: number) => void;
}
