import React from 'react';
import { CssBaseline, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            dark: '#f1f1f1'
        },
        secondary: {
            main: "#202329"
        },
        background: {
            default: "#24282F"
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol'
        ].join(','),
    },
});
theme = responsiveFontSizes(theme);

const MaterialProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
}

export default MaterialProvider;
