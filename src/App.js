import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import Cars from "./Cars";
import { db } from "./config/db";

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

    async function addCarToDb(make, modal, price) {
        try {
            // Add the new friend!
            const id = await db.cars.add({
                make,
                modal,
                price,
            });
            setTimeout(() => {
                setLoading(false);
            }, 500);
            window.prompt("success", id);
        } catch (error) {
            window.prompt("!!!ERROR", error);
        }
    }

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
                        const make = search;
                        const model = "Rexter";
                        const price = 100000000;
                        rowData.push({
                            make,
                            model,
                            price,
                        });
                        console.log(rowData);
                        setRowData(rowData);
                        console.log(make, model, price);
                        addCarToDb(make, model, price);
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
            {!loading && <Cars />}

            {loading && "Loading..."}
        </div>
    );
}

export default App;
