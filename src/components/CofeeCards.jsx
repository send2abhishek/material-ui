import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Avatar,
  CardMedia,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
const CofeeCard = ({ avatarSrc, title, subTitle, imageUrl, desc }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia image={imageUrl} title={title} className={classes.media} />

      <CardContent>
        <Typography>{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default CofeeCard;
