import { handleMouseDown } from "../utils/TableHelpers";

interface Column {
  key: string;
  title: string;
}

interface ResizableColumnHeaderProps {
  column: Column;
  onResize: (width: number) => void;
  setColumnMoving: React.Dispatch<React.SetStateAction<string | null>>;
}

const ResizableColumnHeader = ({
  column,
  onResize,
  setColumnMoving,
}: ResizableColumnHeaderProps) => {
  const columnMoving = () => {
    setColumnMoving(column.key);
  };
  return (
    <div className="flex items-center">
      <div className="mr-2">{column.title}</div>
      <div
        className="resize-handle absolute top-0 bottom-0 right-0 w-3 cursor-col-resize"
        onMouseDown={(e) =>
          handleMouseDown(e, column.key, onResize, setColumnMoving)
        }
      />
    </div>
  );
};

export default ResizableColumnHeader;
