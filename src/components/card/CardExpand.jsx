import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardMedia,
    Collapse,
    List, ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';
import {ExpandLess} from "@mui/icons-material";
import {useHistory} from "react-router-dom";

const CardExpand = ({name, image, children, expandName, expandLabel, expandArray}) => {
    const [expanded, setExpanded] = useState(false);
    const history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onClickExpandItem = (event, search) => {
        event.preventDefault();
        history.push(`/${expandName}?search=${search}`);
    }

    return (
        <Card sx={{ width: 320 }}>
            {image &&
                <CardMedia
                    component="img"
                    height="310"
                    image={image}
                    alt={name}
                    loading="lazy"
                />
            }
            <CardContent sx={{height: "150px"}}>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Box>
                    {children}
                </Box>
            </CardContent>
            <List>
                <ListItemButton onClick={handleExpandClick}>
                    <ListItemText primary={`${expandLabel}:`} />
                    {expanded ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {expandArray.map((element) => (
                            <ListItemButton sx={{ pl: 4 }} key={element.id} onClick={(e) => onClickExpandItem(e, element.name)}>
                                {element.image &&
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={element.name}
                                            src={element.image}
                                            loading="lazy"
                                            variant="rounded"
                                            sx={{width: "50px", height: "50px"}}
                                        />
                                    </ListItemAvatar>
                                }
                                <ListItemText primary={element.name} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Card>
    );
}

export default CardExpand;
