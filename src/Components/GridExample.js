import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { AllModules } from 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css'


import 'ag-grid-enterprise'

class GridExample extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            modules: AllModules,
            filterData: null,
             columnDefs: [
                {   headerName: 'Firstname', 
                    field: 'fnm', 
                    sortable:true, 
                    filter: true, 
                    checkboxSelection: true,
                    
                },
                { headerName: 'Lastname', field: 'lnm', sortable:true, filter: true},
                { headerName: 'Branch', field: 'branch', sortable:true, filter: true},
                { headerName: 'E-mail', field: 'email', sortable:true, filter: true},
                { headerName: 'Contact', field: 'contact', sortable:true, filter: true},
                { headerName: 'Action', field: 'action', filter: true ,cellRenderer: function () {
                    return (
                      ' <button class="btn btn-primary" onClick={this.delete}>Delete</button> '
                    )
                    }}
             ],
             autoGroupColumnDef: {
                headerName: 'Firstname',
                minWidth: 170,
                field: 'lnm',
                valueGetter: function(params) {
                  if (params.node.lnm) {
                    return params.node.key;
                  } else {
                    return params.data[params.colDef.field];
                  }
                },
                headerCheckboxSelection: true,
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: { checkbox: true },
              },
              defaultColDef: {
                editable: true,
                enableRowGroup: true,
                enablePivot: true,
                enableValue: true,
                sortable: true,
                resizable: true,
                pagination: true,
                filter: true,
                flex: 1,
                minWidth: 100,
              },
              rowSelection: 'multiple',
              rowGroupPanelShow: 'always',
              pivotPanelShow: 'always',

            paginationPageSize: 3,
            paginationNumberFormatter: function(params) {
            return '[' + params.value.toLocaleString() + ']';
            },

            

             rowData: [
                 { fnm: 'Brijesh', lnm: 'Shah', branch: 'MCA', email: 'brijesh@gmail.com', contact: 9879879870 },
                 { fnm: 'Gaurav', lnm: 'Bhatt', branch: 'M.Sc.(IT)', email: 'gaurav@gmail.com', contact: 9879879870 },
                 { fnm: 'Dharya', lnm: 'Shah', branch: 'Computer IT', email: 'dhairya@gmail.com', contact: 9879879870 },
                 { fnm: 'Meet', lnm: 'Shah', branch: 'It Engg.', email: 'meet@gmail.com', contact: 9879879870 },
                 { fnm: 'Prachi', lnm: 'Patel', branch: 'MCA', email: 'prachi@gmail.com', contact: 9879879870 },
                 { fnm: 'Maitri', lnm: 'Patel', branch: 'BCA', email: 'maitri@gmail.com', contact: 9879879870 },
                 

             ]
        };

       
      }
      
     
      searchData = (e) => {
        let updateList = this.state.rowData;
        updateList = updateList.filter(item => {
          return item.fnm.toLowerCase().search(
            e.target.value.toLowerCase()
          ) !== -1
        })
        this.setState({
          filterData: updateList
        })
    }
   
    
    render() {
        return (
            <div className='ag-theme-material' style={{ width: '100', height: '500px' }}>
               
               Search : <input type='text' onChange={this.searchData}  className='ag-theme-material'></input>
               
            <br/><br/><br/>
                <AgGridReact 
                modules={this.state.modules}
                columnDefs={this.state.columnDefs}
                autoGroupColumnDef={this.state.autoGroupColumnDef}
                defaultColDef={this.state.defaultColDef}
                suppressRowClickSelection={true}
                groupSelectsChildren={true}
                debug={true}
                rowSelection={this.state.rowSelection}
                rowGroupPanelShow={this.state.rowGroupPanelShow}
                pivotPanelShow={this.state.pivotPanelShow}
                enableRangeSelection={true}
                pagination={true}
                columnDefs={this.state.columnDefs} 
                rowData={this.state.rowData} 
                rowSelection= 'multiple' 
                onGridReady={para => this.gridApi = para.api} 
                />
                
            </div>
        )
    }
}

export default GridExample