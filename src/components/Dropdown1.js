import React from 'react'

function Dropdown1(props) {
    return (
        <div>
            <select onChange={(e) => props.onOrgChange(e.target.value)}>
                    <option selected={true} disabled={true}>--select Organisation --</option>
                    {props.orgList.map((data) => (
                        <option key={data}>{data}</option>
                    ))}

                </select>
            
        </div>
    )
}

export default Dropdown1
