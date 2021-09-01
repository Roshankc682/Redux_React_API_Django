import React from "react";
import { useSelector, useDispatch } from "react-redux"


export default function Data() {
    const data = useSelector((state) => state.counterme.data)

    return (
        <div>
            <h1><center>Single Data</center></h1>
               {/* <span className="value">{data}</span> */}
        </div>
    )
}
