import React from 'react';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import swal from "sweetalert";

const deleteClick = () => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}

const columns = [{
    dataField: 'id',
    text: 'id',
    sort: true
}, {
    dataField: 'name',
    text: 'nama',
}, {
    dataField: 'image',
    text: 'link image',
}, {
    dataField: 'description1',
    text: 'Kategori',
    sort: true
}, {
    dataField: 'description2',
    text: 'Materi'
}, {
    dataField: '',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button variant="outline-success">Detail</Button>{' '}
                <Button variant="outline-primary">Edit</Button>{' '}
                <Button variant="outline-danger" onClick={deleteClick} >Delete</Button>
            </div>
        )
    }
}
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
    </span>
);


function DashboardContent({ props }) {
    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: props.length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };

    return (
        <BootstrapTable keyField='id' data={props} columns={columns} defaultSorted={defaultSorted} pagination={paginationFactory(options)} />
    )
}

export default DashboardContent