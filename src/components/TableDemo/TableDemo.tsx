import { Button } from '@chakra-ui/react';
import React from 'react';
import { Column, Row } from 'react-table';
import AntdTable from './AntdTable';
import Chakratable from './ChakraTable';
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
        Header: 'Provider',
        accessor: 'provider',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Actions',
        Cell: ({ row }: { row: Row<typeof data[0]> }) => (
          <Button
            aria-label="delete"
            size="sm"
            colorScheme={'blue'}
            onClick={() => alert(row.original.name)}
          >
            Delete
          </Button>
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
      <h1>Chakra Table</h1>
      <Chakratable columns={columns} data={data} />
      <h1>Antd Table</h1>
      <AntdTable />
    </div>
  );
}
