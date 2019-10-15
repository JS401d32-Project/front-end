import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import { data } from './data';

const columns = [
  {
    Header: 'Case ID',
    accessor: 'caseID',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Case Name',
    accessor: 'caseName',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Case Attorney',
    accessor: 'caseAttorney',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Case Status',
    accessor: 'caseStatus',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
];

export default function HomePage() {

useEffect(() => {

});

  return(
    <>
    <div className="container">
      <h1>Welcome to CaseHawk!</h1>
      <Link to="/casePage">CasePage</Link>
    </div>
    <div className="caseList" style={{textAlign: 'center', padding: '50px' }}>
      <ReactTable
      manual
      minRows={0}
      pageSize={1}
      data={data}
      columns={columns}
      pages={0}
      defaultPageSize={5}
      showPagination={true}
    /></div>
</>
  )

}