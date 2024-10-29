import React from 'react';
import PropsEx from './PropsEx';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from '@mui/material';

const TableHeader = ({ columns }) => {
    return (
        <TableHead>
            <TableRow>
                {columns.map((tbcol, index) => (
                    <TableCell key={index} align="center" style={{ fontWeight: 'bold' }}>
                        {tbcol}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const TableBodyComponent = ({ charsData, removeCharecter }) => {
    return (
        <TableBody>
            {charsData.map((tbdata, index) => (
                <TableRow key={index}>
                    <TableCell align="center">{tbdata.name}</TableCell>
                    <TableCell align="center">{tbdata.job}</TableCell>
                    <TableCell align="center">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => removeCharecter(index)}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

const PropsEx2 = (props) => {
    const { charsData, columns, removeCharecter } = props;

    return (
        <div>
             <Table>
                <TableHeader columns={columns} />
                <TableBodyComponent charsData={charsData} removeCharecter={removeCharecter} />
            </Table>
        </div>
    );
};

export default PropsEx2;
