import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {GET_CHARACTERS, GET_CHARACTERS_BY_NAME} from "../../service/characters/characterService";
import {useLazyQuery} from "@apollo/client";
import {Grid, Typography} from "@mui/material";
import CardExpand from "../../components/card/CardExpand";
import InfiniteScroll from "react-infinite-scroll-component";
import {Loading, Empty, Error} from "../../components/BasicReturns";

const Characters = () => {
    const { search } = useLocation();
    const query = React.useMemo(() => new URLSearchParams(search), [search]);
    const searchParam = query.get("search");

    const [ getCharacters, { loading, error, data }] = useLazyQuery(searchParam? GET_CHARACTERS_BY_NAME : GET_CHARACTERS);

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchMoreData = () => {
        getCharacters({
            variables: { search: searchParam || undefined, page: currentPage }
        });
    }

    useEffect(() => {
        if(data){
            setCharacters(characters.concat(data.characters.results));
            setCurrentPage(currentPage + 1);
        }else{
            fetchMoreData();
        }
    }, [data]);

    const [lastQuery, setLastQuery] = useState(undefined);
    if(lastQuery !== query) {
        setCurrentPage(1);
        setCharacters([]);
        setLastQuery(query);
        fetchMoreData();
    }

    if (!loading && !data) return <Empty search={searchParam}/>
    if (error) return <Error error={error}/> ;

    return (
        <InfiniteScroll
            dataLength={characters.length}
            next={fetchMoreData}
            hasMore={!data || currentPage < data.characters.info.pages}
            loader={<Loading/>}
        >
            <Grid container
                  spacing={4}
                  padding={4}
                  direction="row"
                  justifyContent="center"
            >
                <Grid item key="title" xs={12}>
                    <Typography color="primary" variant="h4">
                        {search ? `Search character by name: ${searchParam}` : `Search All characters`}
                    </Typography>
                </Grid>
                {characters.map((character) => (
                    <Grid item key={character.id}>
                        <CardExpand name={character.name}
                                    image={character.image}
                                    expandName={"episodes"}
                                    expandLabel={"Episodes"}
                                    expandArray={character.episode}
                        >
                            <Typography variant="body" color="secondary">
                                Origin Location:
                            </Typography>
                            <Typography variant="body2" color="secondary">
                                <b>{character.origin.name}</b>
                            </Typography>
                        </CardExpand>
                    </Grid>
                ))}
            </Grid>
        </InfiniteScroll>
    );
}

export default Characters;
