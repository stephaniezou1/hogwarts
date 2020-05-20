import React from 'react'

export class Button extends React.Component {
    
    handleChange = (evt) => {
        this.props.handleFilter(evt.target.value)
    }
    
    render() {
        return (
            <div>
                <select value={this.props.filterTerm} onChange={this.handleChange} >
                    <option value="All the Hogs">All the Hogs</option>
                    <option value="Greased Hogs">Greased Hogs</option>
                    <option value="Non-greased Hogs">Non-greased Hogs</option>
                </select>
            </div>
        )
    }
}

export default Button
