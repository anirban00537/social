import React from "react";
import useStyles from "./Styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePostnow, likePostNow } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fonrSize="default" />
          </Button>
        </div>

        <div className={classes.details}>
          {post.tags.map((tag) => `#${tag} `)}
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.message}
          </Typography>
          <Typography className={classes.title} variant="body5" gutterBottom>
            {post.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(likePostNow(post._id));
            }}
          >
            <ThumbUpAltIcon fontSize="small" />
            Like
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(deletePostnow(post._id));
            }}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
