import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import CardExpand from "../components/card/CardExpand";
import {useQuery} from "@apollo/client";
import {GET_CHARACTERS} from "../service/characters/characterService";
import {Link} from "react-router-dom";
import {Empty, Error, Loading} from "../components/BasicReturns";

const Home = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: 1 }
    });

    if (loading) return <Loading/>
    if (!data) return <Empty/>
    if (error) return <Error error={error}/>

    return (
        <Grid container
              spacing={4}
              padding={4}
              direction="row"
              justifyContent="center"
        >
            <Grid item key="title" xs={12}>
                <Typography color="primary" variant="h4">
                    Some Characters
                </Typography>
            </Grid>
            {data.characters.results.slice(0, 5).map((character) => (
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
            <Grid item key="title" xs={12}>
                <Button variant="text" component={Link} to="/characters" sx={{display: 'flex', justifyContent: 'center'}}>
                    Show all Characters
                </Button>
            </Grid>
        </Grid>
    );
}

export default Home;
