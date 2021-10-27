import React from 'react'

function Dropdown2(props) {
    return (
        <div>
            <select>
                {props.orgData.map((data) => (
                        <option key={data}>{data}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown2
