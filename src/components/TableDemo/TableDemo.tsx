import React from 'react';
import { Column, Row } from 'react-table';
import MyTable from './MyTable';
import SimpleTable from './SimpleTable';

export default function TableDemo() {
  const data = React.useMemo(
    () => [
      {
        name: 'AWS testing',
        provider: 'AWS',
        id: 'fdjalkjfldajdklj',
      },
      {
        name: 'Ali Cloud testing',
        provider: 'Ali Cloud',
        id: 'fddajlkjdaiewjjflk',
      },
    ],
    [],
  );

  const columns: Column<typeof data[0]>[] = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Pdoiver',
        accessor: 'provider',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Actions',
        Cell: ({ row }: { row: Row<typeof data[0]> }) => (
          <button onClick={() => alert(row.original.name)}>Delete</button>
        ),
      },
    ],
    [],
  );

  return (
    <div>
      <h1>Simple Table</h1>
      <SimpleTable columns={columns} data={data} />
      <h1>My Table</h1>
      <MyTable columns={columns} data={data} />
    </div>
  );
}
