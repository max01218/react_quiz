import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id'  },
    { field: 'lastName',width: 200 },
    { field: 'firstName',width: 200 },
    { field: 'age'  }];
const rows = [
    { id: 1, lastName: 'MaterialUI', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
    { id: 6, lastName: 'Melisandre', firstName: 'Max', age: 15 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const MultiButtonData = () => {
    return (<div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>);
}

export default MultiButtonData;