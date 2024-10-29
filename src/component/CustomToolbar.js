import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const CustomToolbar = ({ onAddClick }) => {
  return (
    <GridToolbarContainer>
      <Button color="primary" variant='contained' startIcon={<AddIcon />} onClick={onAddClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
