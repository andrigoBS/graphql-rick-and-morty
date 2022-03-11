import React from "react";
import {Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import FavIconSvg from "./svgs/FavIconSvg";
import {Link} from "react-router-dom";

const styles = {
    container: {
        border: "medium none",
        flexGrow: 1,
        justifyContent: "flex-start",
    },
    icon:{
        fontSize: "50px",
    },
    title: {
        fontWeight: "900",
        marginLeft: "10px",
    },
};

function LogoLink({sx}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    styles.container.color = theme.palette.secondary.main;

    return (
        <Button component={Link} to="/" sx={{...styles.container, ...sx}}>
            <FavIconSvg sx={styles.icon}/>
            {!isMobile &&
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={styles.title}
                >
                    {process.env.REACT_APP_PROJECT_NAME}
                </Typography>
            }
        </Button>
    );
}

export default LogoLink;
