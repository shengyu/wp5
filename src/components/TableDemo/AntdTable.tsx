import { MoreOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: 'Provider',
    dataIndex: 'provider',
    key: 'provider',
    width: 200,
    sorter: (a: any, b: any) => a.provider.length - b.provider.length,
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 200,
    sorter: (a: any, b: any) => a.id.length - b.id.length,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Button
        type="text"
        icon={<MoreOutlined />}
        onClick={() => alert(record.name)}
      ></Button>
    ),
  },
];

const data = [
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
];

export default function AntdTable() {
  return <Table size="small" columns={columns} dataSource={data} />;
}
