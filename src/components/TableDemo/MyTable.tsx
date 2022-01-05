import React from 'react';
import {
  Column,
  useFlexLayout,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import styled from 'styled-components';

type TableProps<T extends object> = {
  data: T[];
  columns: Column<T>[];
};

const Styles = styled.div`
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  table {
    border-spacing: 0;
    border-top: 1px solid rgb(224, 224, 224);
    text-align: left;
    width: 100%;
    thead {
      background-color: rgba(0, 0, 0, 0.04);
      font-size: 12px;
    }

    tbody {
      font-size: 13px;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgb(224, 224, 224);
      width: 200px;
      min-width: 200px;
      max-width: 200px;
      :last-child {
        max-width: 100%;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
    display: flex;
    justify-content: right;
  }
`;

export default function MyTable<T extends object>({
  columns,
  data,
}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useFlexLayout, useSortBy, usePagination);

  return (
    <Styles>
      <div className="tableWrap">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' ^'
                          : ' v'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <span>Rows per page:</span>{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          {}
          <span>
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
        </div>
      </div>
    </Styles>
  );
}
