import React, {useState} from "react";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from "react-router-dom";

const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '16ch',
            '&:focus': {
                width: '26ch',
            },
        },
    },
}));

const SearchInput = ({placeholder, route}) => {
    const [query, setQuery] = useState();

    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        let url = '/'+route;
        if(query) {
            url += '?search='+query;
        }
        history.push(url);
    }

    const onChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    }

    return (
        <Search onSubmit={onSubmit}>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  placeholder={placeholder}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={onChange}
              />
        </Search>
    );
}

export default SearchInput;
