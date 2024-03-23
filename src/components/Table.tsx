import React, { useState } from "react";
import ColumnData from "./ColumnData";
import ResizableColumnHeader from "./ColumnHeader";

interface Column {
  key: string;
  title: string;
}

interface ResizableTableProps {
  data: any[];
  columns: Column[];
}

const Table = ({ data, columns }: ResizableTableProps) => {
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>(
    {}
  );
  const [columnMoving, setColumnMoving] = useState<string | null>(null);
  const handleResize = (columnKey: string, newWidth: number) => {
    setColumnWidths({ ...columnWidths, [columnKey]: newWidth });
  };
  console.log("moving", columnMoving);

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              style={{ width: columnWidths[column.key] }}
              className={`border py-2  min-w-[2px] relative ${
                columnMoving && columnMoving === column.key
                  ? "border-r-blue-500 border-2"
                  : ""
              }`}
            >
              <ResizableColumnHeader
                column={column}
                onResize={(width) => handleResize(column.key, width)}
                setColumnMoving={setColumnMoving}
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="">
            {columns.map((column) => (
              <td
                key={column.key}
                className={`border  py-2 relative min-w-[2px] w-auto break-all ${
                  columnMoving && columnMoving === column.key
                    ? "border-r-blue-500 border-2"
                    : ""
                }`}
                style={{ width: columnWidths[column.key] }}
              >
                <ColumnData
                  key={column.key}
                  onResize={(width) => handleResize(column.key, width)}
                  setColumnMoving={setColumnMoving}
                >
                  {row[column.key]}
                </ColumnData>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
