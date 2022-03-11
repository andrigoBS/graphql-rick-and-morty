import React from "react";
import {Box, Link, Typography, useTheme} from "@mui/material";
import LogoLink from "./LogoLink";

const configs = {
    gitHub: "https://github.com/andrigoBS",
    linkedin: "https://www.linkedin.com/in/andrigo-borba-dos-santos/",
};

const style = {
    container : {
        display: "grid",
        justifyItems: "center",
        padding: "40px",
    },
    link:{
        margin: "5px",
        '&:not(:hover)': {
            textDecoration: "none",
        },
        '&:hover': {
            cursor: "pointer",
        }
    }
}

function Footer() {
    const theme = useTheme();

    return (
        <Box sx={{backgroundColor: theme.palette.secondary.main, ...style.container}}>
            <LogoLink sx={{color: theme.palette.primary.main}}/>
            <Link sx={style.link} target="_blank" href={configs.gitHub}>GitHub</Link>
            <Link sx={style.link} target="_blank" href={configs.linkedin}>By: Andrigo Santos</Link>
            <Typography component="h6" variant="h6" color="primary">2021</Typography>
        </Box>
    );
}

export default Footer;
