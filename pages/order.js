import React, { useState, useEffect } from "react";

const order = () => {
  const [totalLTE, setTotalLTE] = useState("");
    const [totalGTE, setTotalGTE] = useState("");
    const [createdAtLTE, setCreatedAtLTE] = useState("");
    const [createdAtGTE, setCreatedAtGTE] = useState("");
  return (
    <div className="row p-5" style={{marginLeft:'5%'}}>
      <div className='col'>
        <h5>
          Orders
        </h5>
        <div className="row ">
          <div className='col d-grid gap-3'>
          <input
                type="number"
                className="px-4 py-2 rounded shadow border-0"
                value={totalLTE}
                onChange={(e) => setTotalLTE(e.target.value)}
                placeholder="total less than or equal to"
            />
            <input
                type="number"
                className="px-4 py-2 rounded shadow border-0"
                value={totalGTE}
                onChange={(e) => setTotalGTE(e.target.value)}
                placeholder="total greater than or equal to"
            />
           

          </div>
          <div className='col gap-4 d-grid gap-3'>
          <input
                type="datetime-local"
                className="px-4 py-2 rounded shadow border-0"
                value={createdAtLTE}
                onChange={(e) => setCreatedAtLTE(e.target.value)}
                placeholder="created at less than or equal to"
            />
            <input
                type="datetime-local"
                className="px-4 py-2 rounded shadow border-0"
                value={createdAtGTE}
                onChange={(e) => setCreatedAtGTE(e.target.value)}
                placeholder="created at greater than or equal to"
            />
          </div>
        </div>
      </div>
      <div className="col">
        
      </div>
      
    </div>
  )
}

export default order
