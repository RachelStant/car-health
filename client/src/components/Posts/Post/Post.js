import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import receipt from '../../../images/noReceipt.png'

import { deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '50%',
      });

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile ? (post.selectedFile) : (receipt)} title={post.serviceTitle} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.serviceDate).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color="textSecondary">{post.tags.length > 1 ? post.tags.map((tag) => `#${tag} `) : ''}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.serviceTitle}</Typography>
            <CardContent>
                <Typography className={classes.descript} variant="body2" color='textSecondary' component='p'>{post.serviceDescription}</Typography>
                <Divider light />
                <Box className={classes.box} display={'flex'}>
                    <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                        <p className={classes.statLabel}>Location</p>
                        <p className={classes.statValue}>{post.serviceShop}</p>
                    </Box>
                    <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                        <p className={classes.statLabel}>Cost($)</p>
                        <p className={classes.statValue}>{post.serviceCost}</p>
                    </Box>
                    <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                        <p className={classes.statLabel}>Service Date</p>
                        <p className={classes.statValue}>{post.userServiceDate ? (moment(post.userServiceDate).format('M/D/YYYY')) : ''}</p>
                    </Box>
                </Box>

            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='medium'/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;