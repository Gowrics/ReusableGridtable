import React, { useState } from "react";
import PropsEx from "./component/PropsEx";
import PropsEx2 from "./component/PropsEx2";
import { Container, Typography, Box } from '@mui/material';

const ParentStateEx = () => {
    const [charecter, setCharecter] = useState([
        { name: "gowri", job: "developer" },
        { name: "gowri", job: "developer" },
        { name: "gowri", job: "developer" },
        { name: "gowri", job: "developer" }
    ]);

    const removeCharecter = (index) => {
        setCharecter((charecter) => charecter.filter((char, i) => i !== index));
    };

    const columns = ["Name", "Job", "Action"];

    return (
<>
<br/><br/>    
        <Container sx={{backgroundColor:"skyblue",paddingTop:3}} maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                This is Parent Component
            </Typography>
            <Box my={3}>
                <PropsEx gfgcolor="red" usercolor="blue" />
            </Box>
            <PropsEx2 
                removeCharecter={removeCharecter} 
                charsData={charecter} 
                columns={columns} 
            />
        </Container>
        </>

    );
};

export default ParentStateEx;
