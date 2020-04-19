import React, { Component } from 'react'

class Filter extends Component {
    render() {
        const { searchData } = this.props

        return (
            <div>
                Search : <input
                    type="text" 
                    className="ag-theme-material"
                    onInput={searchData} 
                 />

            </div>
        )
    }
}

export default Filter
