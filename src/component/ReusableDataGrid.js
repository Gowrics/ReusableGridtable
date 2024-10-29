import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

const ReusableDataGrid = ({ 
  columns, 
  rows, 
  pageSize = 5, 
  autoHeight = true, 
  isTrue = false, // Use this flag to toggle specific features
  onRowClick, 
  onRefresh 
}) => {

  // Add editable property conditionally to each column if isTrue is true
  const updatedColumns = columns.map(column => ({
    ...column,
    editable: isTrue // Make columns editable based on isTrue
  }));

  return (
    <Box sx={{ height: autoHeight ? "auto" : 400, width: "100%" }}>
      
      {/* Conditional rendering of the refresh button based on isTrue */}
      {isTrue && (
        <Button
          variant="contained"
          color="primary"
          onClick={onRefresh}
          sx={{ mb: 2 }}
        >
          Refresh Data
        </Button>
      )}
      
      <DataGrid
        rows={rows}
        columns={updatedColumns} // Use updated columns with editable property
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection={isTrue} // Conditionally allow checkbox selection
        disableSelectionOnClick
        sortingOrder={['asc', 'desc']} // Enables ascending/descending sorting
        onRowClick={onRowClick} // Handle row click event
        paginationMode="server" // Enable server-side pagination (if needed)
      />
    </Box>
  );
};

export default ReusableDataGrid;
