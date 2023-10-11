import React from 'react'

import DataTable from 'react-data-table-component';

const Table = ({allStudents}) => {
    const columns = [
        {
            name: 'Full Name',
            selector: row => row.name,
        },
        {
            name: 'Age',
            selector: row => row.age,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Actions',
            selector: row => row.email,
        }
    ];

  return (
    <>
        <DataTable
        // pagination
            columns={columns}
            data={allStudents}
            
        />
    </>
  )
}

export default Table