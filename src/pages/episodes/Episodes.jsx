import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {GET_EPISODES, GET_EPISODES_BY_NAME} from "../../service/episodes/episodeService";
import {useLazyQuery} from "@apollo/client";
import {Button, Grid, Typography} from "@mui/material";
import CardExpand from "../../components/card/CardExpand";
import InfiniteScroll from "react-infinite-scroll-component";
import {Empty, Error, Loading} from "../../components/BasicReturns";

const Episodes = () => {
    const { search } = useLocation();
    const query = React.useMemo(() => new URLSearchParams(search), [search]);
    const searchParam = query.get("search");
    const [ getEpisodes, { loading, error, data }] = useLazyQuery(searchParam? GET_EPISODES_BY_NAME : GET_EPISODES);

    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchMoreData = () => {
        getEpisodes({
            variables: { search: searchParam || undefined, page: currentPage }
        });
    }

    useEffect(() => {
        if(data){
            setEpisodes(episodes.concat(data.episodes.results));
            setCurrentPage(currentPage + 1);
        }else{
            fetchMoreData();
        }
    }, [data]);

    const [lastQuery, setLastQuery] = useState(undefined);
    if(lastQuery !== query) {
        setCurrentPage(1);
        setEpisodes([]);
        setLastQuery(query);
        fetchMoreData();
    }

    if (!loading && !data) return <Empty search={searchParam}/>
    if (error) return <Error error={error}/> ;

    return (
        <InfiniteScroll
            dataLength={episodes.length}
            next={fetchMoreData}
            hasMore={!data || currentPage < data.episodes.info.pages}
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
                        {search ? `Search episode by name: ${searchParam}` : `Search All episodes`}
                    </Typography>
                </Grid>
                {episodes.map((episode) => (
                    <Grid item key={episode.id}>
                        <CardExpand name={episode.name}
                                    expandName={"characters"}
                                    expandLabel={"Characters"}
                                    expandArray={episode.characters}
                        >
                            <Typography variant="body" color="secondary">
                                Air Date:
                            </Typography>
                            <Typography variant="body2" color="secondary">
                                <b>{episode.air_date}</b>
                            </Typography>
                        </CardExpand>
                    </Grid>
                ))}
            </Grid>
        </InfiniteScroll>
    );
}

export default Episodes;
