import { handleMouseDown } from "../utils/TableHelpers";

interface ColumnBodyProps {
  key: string;
  children?: React.ReactNode;
  onResize: (widtsh: number) => void;
  setColumnMoving: React.Dispatch<React.SetStateAction<string | null>>;
}
const ColumnData = ({
  key,
  onResize,
  children,
  setColumnMoving,
}: ColumnBodyProps) => {
  return (
    <>
      {children}
      <div
        className="resize-handle absolute top-0 bottom-0 right-0 w-3 cursor-col-resize"
        onMouseDown={(e) => handleMouseDown(e, key, onResize, setColumnMoving)}
      ></div>
    </>
  );
};

export default ColumnData;
