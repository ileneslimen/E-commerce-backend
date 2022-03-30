import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import { useGrabIconStyles } from "@mui-treasury/styles/icon/grab";
import { get_product } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    width: "30%",
    minHeight: 360,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "50%",
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
    color: "white",
  },
}));

function GalaxyCard({ product }) {
  const styles = useStyles();
  const dispatch = useDispatch();
  const mediaStyles = useCoverCardMediaStyles({
    bgPosition: "top",
  });

  return (
    <>
      <Card className={styles.card}>
        <CardMedia classes={mediaStyles} image={`uploads/${product.image}`} />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>{product.category}</InfoSubtitle>
            <InfoTitle>{product.price}$</InfoTitle>
            <InfoCaption>{product.title}</InfoCaption>
            <Link to={`/ProductDetails/${product._id}`}>
              {" "}
              <Button
                color={"primary"}
                fullWidth
                className={styles.cta}
                onClick={() => dispatch(get_product(product._id))}
              >
                Find Out More <ChevronRightRounded />
              </Button>{" "}
            </Link>
          </Info>
        </Box>
      </Card>
    </>
  );
}
export default GalaxyCard;
