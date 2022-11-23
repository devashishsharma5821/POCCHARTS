import "../App.css";

import { AgGridReact } from "ag-grid-react";
import { useState, useMemo, useCallback } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const AgGrid = () => {
  const [rowData, setRowData] = useState<
    { make: string; model: string; price: number }[]
  >([
    { make: "Ford", model: "Focus", price: 40000 },
    { make: "toyota", model: "celice", price: 45000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Mercedes", model: "series", price: 50400 },
    { make: "Mustang", model: "3 series", price: 56000 },
    { make: "BMW 3", model: "ries", price: 50800 },
    { make: "BMW 2", model: "eries", price: 50700 },
  ]);

  const [columnDefs, setColumnDefs] = useState<{ field: string }[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const cellClickedListener = useCallback((e: any) => {
    console.log("cellClicked", e);
  }, []);

  return (
    <div className="ag-theme-balham" style={{ height: 500 }}>
      <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
};

export default AgGrid;
