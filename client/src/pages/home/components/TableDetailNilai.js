import React from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

export default function App() {
  const data = React.useMemo(
    () => [
      { col1: 'Hello', col2: 'World', col3: 'Foo' },
      { col1: 'react-table', col2: 'rocks', col3: 'Bar' },
      { col1: 'whatever', col2: 'you want', col3: 'Baz' },
      { col1: 'dog', col2: 'cat', col3: 'Meow' },
      { col1: 'apple', col2: 'banana', col3: 'Yum' },
      { col1: 'taco', col2: 'burrito', col3: 'Delish' },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      { Header: 'Column 1', accessor: 'col1'},
      { Header: 'Column 2', accessor: 'col2' },
      { Header: 'Column 3', accessor: 'col3' },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)

  const { globalFilter } = state

  return (
    <>
      <input
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
      />
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {column.render('Header')}
                  {column.isSorted ? (column.isSortedDesc ? '⬇️' : '⬆️') : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{ textAlign: 'center', fontWeight: 'bold', padding: '10px' }}
              >
                Data not found
              </td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </>
  )
}
