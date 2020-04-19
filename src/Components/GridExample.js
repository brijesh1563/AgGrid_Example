import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-enterprise'
import '@elastic/eui/dist/eui_theme_light.css'
import ComboBox from './ComboBox'
import Delete from './Delete'
import Filter from './Filter';
import ToggleOption from './ToggleOption';
import Pagination from './Pagination';

let api = '';
class GridExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paginationPageSize: 5, pageCount: null, isPopoverOpen: false, isFirstname: true, IsFirstNameDisplay: true, isLastname: true, isBranch: true, isDob: true, isConatct: true, isEmail: true, isAction: true, isTags: true, filterData: null,
            columnDefs: [{ headerName: "Firstname", field: "firstname", checkboxSelection: true, hide: false, },
            { headerName: "Lastname", field: "lastname" },
            { headerName: "Branch", field: "branch" },
            { headerName: "Contact", field: "contact" },
            { headerName: "Email", field: "email" },
            { headerName: "Actions", field: "action", cellRendererFramework: (params) => <Delete delete={this.deleteRow} /> },
            { headerName: "Tags", field: "tags", width: 400, cellRendererFramework: () => <ComboBox /> },],
            defaultColDef: {
                width: 150, height: 100, editable: true, resizable: true, sortable: true, filter: true, colResizeDefault: 'shift', autoHeight: true, rowHeight: 500, enablePivot: true, enableValue: true,
            },
            // filterData: [],
            rowData: [{
              firstname: "Dhairya",
              lastname: "Shah",
              branch: "IT",
              contact: 9429020011,
              email: "dhairya.shah@rapidops.com"
            },
            
            {
              firstname: "Meet",
              lastname: "Shah",
              branch: "CS",
              contact: 7982124770,
              email: "meet.shah@rapidops.com"
            },
            {
              firstname: "Darshan",
              lastname: "Vesatiya",
              branch: "IT",
              contact: 9870912667,
              email: "darshan.vesatiya@gmail.com"
            },
            {
              
              firstname: "Hardik",
              lastname: "Motwani",
              branch: "CS",
              contact: 9870912668,
              email: "hardik.motwani@gmail.com"
            },
            {
            
              firstname: "Brijesh",
              lastname: "Shah",
              branch: "M.Sc.(IT)",
              contact: 9870912669,
              email: "Brijesh.shah@rapidops.com"
            },
            {
             
              firstname: "Gaurav",
              lastname: 'Bhatt',
              branch: "M.Sc.(IT)",
              contact: 9870912660,
              email: "Gaurav@gmail.com"
            },
            {
              
              firstname: "Jatin",
              lastname: "Jain",
              branch: "IT",
              contact: 9870912610,
              email: "jatin@gmail.com"
            },
            {
              firstname: "Maitri",
              lastname: "Patel",
              branch: "BCA",
              contact: 9870912611,
              email: "maitri@gmail.com"
            },
            {
              firstname: "Prachi",
              lastname: "Patel",
              branch: "MCA",
              contact: 9870912611,
              email: "Prachi@gmail.com"
            },
            ],
           };
        this.searchData = this.searchData.bind(this);
        this.rowHeight = 200;
        this.PopOver = this.PopOver.bind(this)
        this.closePopover = this.closePopover.bind(this)
    }
    componentDidMount() {
        this.setState({
            filterData: this.state.rowData
        })
    }
    deleteRow = () => {
        const selectedData = api.getSelectedRows();
        api.updateRowData({ remove: selectedData });
    }
    updateData = data => {
        this.setState({ rowData: data })
        api.paginationGoToPage(4)
    }
    onGridReady = params => {
        api = params.api;
        this.columnApi = params.columnApi;
        this.setState({
            pageCount: api.paginationProxy.totalPages
        })
    }
    onButtonClick = e => {
        const selectedNodes = api.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(a => a.firstName + ' ' + a.lastName + ' From ' + a.branch).join('\n ')
        alert(`Selected nodes: ${'\n'}${selectedDataStringPresentation}`)
    }
    searchData = (e) => {
        let updateList = this.state.rowData;
        updateList = updateList.filter(item => {
            return item.firstname.toLowerCase().search(
                e.target.value.toLowerCase()
            ) !== -1
        })
        this.setState({
            filterData: updateList
        })
    }
    closePopover = () => {
        this.setState({
            isPopoverOpen: false,
        });
    }
    PopOver = () => {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }
    displayPopOver = (value, col, set) => {
        this.setState({
            [set]: value,
        })
        this.columnApi.setColumnVisible(col, value)
    }
    updatePopOver = (e) => {
        this.setState({
            isFirstName: this.columnApi.getColumn('firstName').visible, isLastName: this.columnApi.getColumn('lastName').visible,
            isBranch: this.columnApi.getColumn('branch').visible, isDob: this.columnApi.getColumn('dateOfBirth').visible,
            isConatct: this.columnApi.getColumn('contact').visible, isEmail: this.columnApi.getColumn('email').visible,
            isAction: this.columnApi.getColumn('action').visible, isTags: this.columnApi.getColumn('tags').visible,
        })
    }
    callbackPagination = (pageSize) => {
        api.paginationSetPageSize(pageSize)
        this.setState({
            paginationPageSize: pageSize
        })
    }
    goToPage = (pageNumber) => {
        api.paginationGoToPage(pageNumber)
    }
    render() {
        const { columnDefs, defaultColDef, filterData } = this.state
        return (
            <div className="ag-theme-material" style={{ height: '600px', width: '100%' }}>
             
             <div className="setting">
                <Filter searchData={this.searchData} />
                    <ToggleOption style={{float: 'right'}} isFirstname={this.state.isFirstname} isLastname={this.state.isLastname} isBranch={this.state.isBranch} isDob={this.state.isDob} isConatct={this.state.isConatct}
                        isEmail={this.state.isEmail} isAction={this.state.isAction} isTags={this.state.isTags} isOpen={this.state.isPopoverOpen} closePopover={this.closePopover}
                        PopOver={this.PopOver} displayPopOver={this.displayPopOver} />
            </div>
             
                <AgGridReact columnDefs={columnDefs} rowData={filterData} defaultColDef={defaultColDef} rowDataChangeDetectionStrategy='IdentityCheck' onGridReady={this.onGridReady}
                    rowSelection="multiple" onDragStopped={e => this.updatePopOver(e)} pagination={true}>
                </AgGridReact>
                <Pagination rowPerPage={this.state.paginationPageSize} callbackPagination={this.callbackPagination} pageCount={this.state.pageCount} goToPage={this.goToPage} />

                

                
            </div >
        );
    }
}
export default GridExample