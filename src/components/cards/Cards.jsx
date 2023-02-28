import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "rgba(107, 116, 118, 0.429)",
    width: "300px",
    borderRadius: "10px",
    margin: 10,
    padding: 20,
  },
  pictureContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
    marginTop: "20px",
    margin: 0,
    padding: 0,
  },
  picture: {
    height: "300px",
    width: "250px",
    transition: "transform .3s ease, opacity .3s, -webkit-transform .3s ease",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  bookName: {
    fontSize: 18,
    marginLeft: 8,
    margin: 0,
    padding: 0,
    marginBottom: 7,
  },
  bookFirstEdition: {
    fontSize: 18,
    display: "block",
    margin: 0,
    padding: 0,
    marginLeft: 8,
    marginBottom: 7,
  },
  bookAuthor: {
    fontSize: 18,
    display: "block",
    marginBottom: 25,
    marginLeft: 8,
    margin: 0,
    padding: 0,
  },
});

function Cards({ url, bookName, bookFirstEdition, bookAuthor }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.pictureContainer}>
        <img className={classes.picture} src={url} alt="Book " />
      </div>
      <p className={classes.bookName}>
        <q>{bookName}</q>
      </p>
      <p className={classes.bookFirstEdition}>
        First Edition: {bookFirstEdition}
      </p>
      <p className={classes.bookAuthor}>{bookAuthor}</p>
    </div>
  );
}

export default Cards;
