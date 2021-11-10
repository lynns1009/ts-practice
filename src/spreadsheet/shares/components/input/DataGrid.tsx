import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


type DataGridProps = {
    data: any[],
    row: (item: any) => React.ReactNode
}
const DataGrid: React.FC<DataGridProps> = ({ data, row, children }) => {
    return (
        <>
            {data.map(i => (
                row(i)
            ))}
        </>
    )
}

export default DataGrid;