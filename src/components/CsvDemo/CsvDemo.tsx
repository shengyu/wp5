import React from 'react';
import { CSVLink } from 'react-csv';

const csvData = [
  ['firstname', 'lastname', 'email'],
  ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
  ['Raed', 'Labes', 'rl@smthing.co.com'],
  ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
];

export default function CsvDemo() {
  return (
    <div>
      <p>Hello</p>
      <CSVLink data={csvData}>Download me</CSVLink>
    </div>
  );
}
