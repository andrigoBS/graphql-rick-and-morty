import React from "react";
import BackgroundSvg from "./svgs/BackgroundSvg";
import SearchInput from "./inputs/SearchInput";
import LogoLink from "./LogoLink";
import {AppBar, Box, Toolbar, Typography, useScrollTrigger, useTheme} from "@mui/material";

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon:{
        fontSize: {xl: "420px", md: "260px", sm: "200px", xs: "140px"}
    },
    title: {
        border: "medium none",
        fontWeight: "900",
        zIndex: "1",
        position: "absolute",
        fontSize: {lg: "100px!important", md: "70px!important", sm: "40px!important", xs: "25px!important"}
    },
};

const TopBar = ({extended}) => {
    const theme = useTheme();
    styles.container.backgroundColor = theme.palette.primary.main;
    styles.title.color = theme.palette.secondary.main;
    styles.icon.color = theme.palette.primary.dark;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return (
        <React.Fragment>
            <AppBar elevation={trigger? 4 : 0}>
                <Toolbar>
                    <LogoLink/>
                    <SearchInput placeholder="Character Search..." route="characters"/>
                    <SearchInput placeholder="Episode Search..." route="episodes"/>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {extended &&
                <Box sx={styles.container}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={styles.title}
                    >
                        {process.env.REACT_APP_PROJECT_NAME}
                    </Typography>
                    <BackgroundSvg sx={styles.icon}/>
                </Box>
            }
        </React.Fragment>
    );
}

export default TopBar;
