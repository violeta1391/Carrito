import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

export const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: "bold",
    fontSize: 20,
    padding: '8px 26px',
    border: '1px solid',
    lineHeight: 1.5,
    color: 'white',
    backgroundColor: "rgb(255,167,30)",
    borderColor: "rgb(255,167,30)",
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#f28500',
        borderColor: '#f28500',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#f28500',
        borderColor: '#f28500',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem #f28500',    },
});

export const BootstrapButtonDisabled = styled(Button)({
    cursor: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: "bold",
    fontSize: 20,
    padding: '8px 26px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: "#ffd792",
    borderColor: "#ffd792",
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        cursor: 'none',
        backgroundColor: '#f28500',
        borderColor: '#f28500',
        boxShadow: 'none',
    },
    '&:active': {
        cursor: 'none',
        backgroundColor: '#f28500',
        borderColor: '#f28500',
    },
    '&:focus': {
        cursor: 'none',
        boxShadow: '0 0 0 0.2rem #f28500',
    },
})