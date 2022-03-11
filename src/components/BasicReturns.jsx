import React from "react";
import {CircularProgress, Grid, Typography} from "@mui/material";

const style = {
    text: {
        display: 'flex',
        margin: '110px 10px 110px 10px',
        justifyContent: 'center'
    }
}

export const Loading = (props) => {
    return (
        <Grid container
              spacing={4}
              padding={4}
              direction="row"
              justifyContent="center"
        >
            <Grid item key="title" xs={12}>
                <CircularProgress color="primary" sx={{display: 'flex', margin: 'auto'}} {...props}/>
            </Grid>
        </Grid>
    );
}

export const Error = ({error, ...props}) => {
    console.log(error);

    return (
        <Typography {...props} color="primary" variant="h4" sx={style.text}>
            Inspected Error! Please try again.
        </Typography>
    );
}

export const Empty = ({search, ...props}) => {
    return (
        <Typography {...props} color="primary" variant="h4" sx={style.text}>
            Not found any result{search && ` for search: ${search}`}
        </Typography>
    );
}
