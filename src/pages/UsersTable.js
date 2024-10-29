import React, { useState } from "react"; // Import useState to manage state
import { Box, Container, Typography } from "@mui/material";
import GridTable from "../component/GridTable"; // Make sure to import your GridTable component

const UsersTable = () => {
  // Move rows into state to manage deletions
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", age: 35, city: "New York" },
    { id: 2, name: "Jane Smith", age: 42, city: "San Francisco" },
    { id: 3, name: "Sam Johnson", age: 29, city: "Los Angeles" },
    { id: 4, name: "Chris Lee", age: 37, city: "Chicago" },
    { id: 5, name: "John1 Doe", age: 25, city: "New York" },
    { id: 6, name: "Jane2 Smith", age: 22, city: "San Francisco" },
    { id: 7, name: "Sam3 Johnson", age: 21, city: "Los Angeles" },
    { id: 8, name: "Chris4 Lee", age: 17, city: "Chicago" },
    { id: 9, name: "John1 Doe", age: 25, city: "New York" },
    { id: 10, name: "Jane2 Smith", age: 22, city: "San Francisco" },
    { id: 11, name: "Sam3 Johnson", age: 21, city: "Los Angeles" },
    { id: 12, name: "Chris4 Lee", age: 17, city: "Chicago" },
  
  ]);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 }, // Column with auto-adjusting width
    { field: 'name', headerName: 'Name', flex: 2 }, // This will take up twice the space of the 'ID' column
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'Phno', headerName: 'Phno', flex: 1 }, // Column with auto-adjusting width
    { field: 'Email', headerName: 'Email', flex: 1 }, // This will take up twice the space of the 'ID' column
    { field: 'Dept', headerName: 'Dept', flex: 1 },
    { field: 'Salary', headerName: 'Salary', flex: 1 },
    { field: 'Email', headerName: 'Email', flex: 1 }, // This will take up twice the space of the 'ID' column
    { field: 'Dept', headerName: 'Dept', flex: 1 },
    { field: 'Salary', headerName: 'Salary', flex: 1 },
 
  ];
  
  const handleDelete = (selectedRows) => {
    console.log("Rows to delete:", selectedRows);
    // Filter out the rows that are selected for deletion
    const newRows = rows.filter((row) => !selectedRows.includes(row.id));
    // Update the state with the new rows
    setRows(newRows);
  };

  // Function to add a new user
  const addUser = (userData) => {
    const newId = rows.length > 0 ? Math.max(...rows.map(row => row.id)) + 1 : 1; // Check if rows are not empty
    const newEntry = { id: newId, ...userData }; // Create new entry
    setRows((prev) => [...prev, newEntry]); // Update rows with the new entry
};
   console.log("Rows being passed to DataGrid:", rows);


  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        User Data
      </Typography>
      <Box sx={{ marginLeft:{ xs: 2, sm: 2 }}} > 
      <GridTable
        columns={columns}
        rows={rows} // Pass the rows state to GridTable
        checkboxSelection={true}
        isLoading={false}
        isdisableFooter={true}
        deleteBtnClick={handleDelete} // Reference the handleDelete function
        addUser={addUser} // Pass the addUser function
        columnVisibilityModel={{ id: true, name: true, age: true, city: true }} // Adjust based on your columns
        isDisablePagination={false} // Disable pagination to hide footer
/>
</Box>
    </Container>
  );
};

export default UsersTable;
