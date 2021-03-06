import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const { posts, isLoading } = useSelector((state) => state.posts);

    if(!posts.isLoading && !posts.length ) return '...';

    return (
        isLoading ? <CircularProgress /> : (
            <Grid container className={classes.conatiner} alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;
