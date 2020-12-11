import React from 'react';
import clsx from 'clsx';
import {Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const useStyles = makeStyles({
    root: {
        maxWidth: 245,
        boxShadow: 'none',
        borderRadius: 5
    },
    media: {
    },
    rateValue: {
        fontWeight: 'bold',
        marginTop: 2
    }
});

function PlaceCard() {
    const classes = useStyles();
    const shadowStyles = useBouncyShadowStyles();
    const gutterStyles = usePushingGutterStyles({ firstExcluded: true });

    return(
        <Card className={clsx(classes.root, shadowStyles.root)}>
            <CardActionArea disableRipple={true}>
                <CardMedia className={classes.media} component="img" height="140" image="http://cdn.sci-news.com/images/enlarge7/image_8846e-Abronia-morenica.jpg" title="Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mb={1} className={gutterStyles.parent}>
                        <Rating name={'rating'} value={2} size={'small'} />
                        <Typography variant={'body2'} className={classes.rateValue}>
                            4.0
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default PlaceCard;
