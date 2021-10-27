import React, { Component } from 'react'

const data = {
    "organisations": {
        "organisation1": ["platform1.1", "platform1.2", "platform1.3", "platform1.4"],
        "organisation2": ["platform2.1", "platform2.2", "platform2.3", "platform2.4"],
        "organisation3": ["platform3.1", "platform3.2", "platform3.3", "platform3.4"],
        "organisation4": ["platform4.1", "platform4.2", "platform4.3", "platform4.4"]
    },
}

export class organisations extends Component {

    constructor(props) {
        super(props)

        this.state = {
            orgList: [],
            orgData: []
        }
    }
    componentDidMount() {
        this.setState({ orgList: Object.keys(data.organisations) })
    }

    onOrgChange = (val) => {

        this.setState({orgData: Object.values(data.organisations[val])})

    }

    render() {
        return (

            
            <div>
                <h1>Task Dropdown Dependency</h1>
                <select onChange={(e) => this.onOrgChange(e.target.value)}>
                    <option selected={true} disabled={true}>--select Organisation --</option>
                    {this.state.orgList.map((data) => (
                        <option>{data}</option>
                    ))}

                </select>

                <select>
                {this.state.orgData.map((data) => (

                    <option>{data}</option>
                ))}
            </select>


            </div>
        )
    }
}

export default organisations
