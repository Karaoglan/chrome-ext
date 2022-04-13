import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";

function App() {
    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
    ]);

    const [columnDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
    ]);

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <input
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <button
                    onClick={() => {
                        setLoading(true);
                        rowData.push({
                            make: search,
                            model: "Rexter",
                            price: 100000000,
                        });
                        console.log(rowData);
                        setRowData(rowData);
                        setTimeout(() => {
                            setLoading(false);
                        }, 500);
                    }}
                >
                    SUBMIT
                </button>
            )}
            {!loading && (
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                ></AgGridReact>
            )}
            {loading && "Loading..."}
        </div>
    );
}

export default App;
