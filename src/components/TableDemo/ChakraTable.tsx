import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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
    border-top: 1px solid rgb(224, 224, 224);
    width: 100%;
    thead {
      background-color: rgba(0, 0, 0, 0.04);
    }

    th,
    td {
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

export default function Chakratable<T extends object>({
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
        <Table {...getTableProps()} size="sm" variant="unstyled">
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps)}>
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
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
          <chakra.span>
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </chakra.span>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <ChevronLeftIcon />
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <ChevronRightIcon />
          </button>{' '}
        </div>
      </div>
    </Styles>
  );
}
