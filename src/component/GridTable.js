import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

// Custom theme definition
const customTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "2px solid #1976d2",
          height: "100%",
          backgroundColor: "#f0f0f0", // Row background
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #d3d3d3',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: "#e0f7fa",
            fontWeight: "bold",
            width: "100%",
          },
          '& .MuiTablePagination-root': {
            backgroundColor: "#fafafa",
          },
        },
      },
    },
  },
});

// Reusable DataGrid component
const GridTable = ({
  columns = [],
  rows = [],
  checkboxSelection,
  isLoading = true,
  deleteBtnClick,
  columnVisibilityModel = [],
  isDisablePagination = false,
  isdisableFooter=false,
  customFooter: CustomFooter,
  addUser, // Prop to add new user
}) => {
  const [selectedRows, setSelectedRows] = useState([]); // State to store selected row IDs
  const [open, setOpen] = useState(false); // State to manage dialog visibility
  const [newUser, setNewUser] = useState({ name: "", age: "", city: "" }); // State for new user input

  // Method to handle row selection changes
  const handleSelectionChange = (selectedIds) => {
    setSelectedRows(selectedIds); // Update selected rows
  };

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value })); // Update new user input state
  };

  const handleAddUser = () => {
    if (addUser) {
      addUser(newUser); // Call the addUser function passed as a prop
    }
    setNewUser({ name: "", age: "", city: "" }); // Reset new user input state
    handleClose(); // Close the dialog
  };

  // Render DataGrid inside ThemeProvider to apply the custom theme
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ height: 400, width: '80%', marginTop: 2 }}>
        
        {/* Optional Loading Indicator */}
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Button to add new user */}
            {addUser && (
              <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ mb: 2 }}>
                Add New User
              </Button>
            )}

            {/* Conditionally show Delete Button */}
            {deleteBtnClick && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteBtnClick(selectedRows)} // Pass selected rows to the handler
                sx={{ mb: 2 }}
                disabled={selectedRows.length === 0} // Disable if no rows are selected
              >
                Delete Selected Rows
              </Button>
            )}

            {/* Main DataGrid Component */}
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection={checkboxSelection} // Toggle checkbox selection
              onRowSelectionModelChange={(ids) => handleSelectionChange(ids)} // Capture selected row IDs
              columnVisibilityModel={columnVisibilityModel} // Control column visibility
              disablePagination={isDisablePagination} // Toggle pagination
              hideFooter={isdisableFooter}
              components={{
                Footer: CustomFooter || undefined, // If Custom Footer is provided, render it
              }}
            />
            
            {/* Dialog for Adding New User */}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add New User</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  name="name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.name}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="dense"
                  name="age"
                  label="Age"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={newUser.age}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="dense"
                  name="city"
                  label="City"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.city}
                  onChange={handleInputChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleAddUser} color="primary">
                  Add User
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default GridTable;
