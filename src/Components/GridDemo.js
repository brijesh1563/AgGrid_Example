import React, { Component } from 'react' 
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

class GridDemo extends Component {

constructor(props) {
    super(props)

    this.state = {
         columnDefs: [
            { headerName: 'Id', field: 'id', sortable:true, filter: true, checkboxSelection: true},
            { headerName: 'Name', field: 'name', sortable:true, filter: true},
            { headerName: 'Age', field: 'age', sortable:true, filter: true}
         ],
         rowData: [
             { id: 1, name: 'Brijesh Shah', age: 22 },
             { id: 2, name: 'Hina Shah', age: 57 },
             { id: 3, name: 'Rajankumar Shah', age: 62 },
             { id: 4, name: 'Sarojben Shah', age: 82 },
             
         ]
    };
}

clickHandler = () => {
    const getselectedNodes = this.gridApi.getSelectedNodes();
    const getSelectedData = getselectedNodes.map(node => node.data);
    const selectedDataStringPresentation = getSelectedData.map(node => node.name+ ' ' + node.age).join(', ');
    alert(`Selected Nodes :${selectedDataStringPresentation}`)
}

    render() {
        return (
            <div className='ag-theme-balham' style={{ width: '100', height: '300px'}}>
                <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} rowSelection= 'multiple' onGridReady={para => this.gridApi = para.api} />
                <button onClick={this.clickHandler}>Get Selected Value</button>
            </div>
        )
    }
}

export default GridDemo
