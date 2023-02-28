import { createUseStyles } from "react-jss";
import Cards from "./components/cards/Cards";
import { v4 as uuid } from "uuid";

const BOOKS = [
  {
    url: "assets/sapiens.jpg",
    bookName: "Sapiens",
    bookFirstEdition: 2014,
    bookAuthor: "Yuval Noah Harari",
  },
  {
    url: "assets/hary_potter.jpg",
    bookName: "Harry Potter and the Goblet of Fire",
    bookFirstEdition: 2000,
    bookAuthor: "JK Rowling",
  },
  {
    url: "assets/green_road.jpg",
    bookName: "The Green Road",
    bookFirstEdition: 2015,
    bookAuthor: "Anne Enright",
  },
  {
    url: "assets/wolf_hall.jpg",
    bookName: "Wolf Hall",
    bookFirstEdition: 2009,
    bookAuthor: "Hilary Mantel",
  },
  {
    url: "assets/half_of_a_yellow_sun.jpg",
    bookName: "Half of a Yellow Sun",
    bookFirstEdition: 2006,
    bookAuthor: "Chimamanda Ngozi Adichie",
  },
  {
    url: "assets/life_after_life.jpg",
    bookName: "Life After Life",
    bookFirstEdition: 2013,
    bookAuthor: "Kate Atkinson",
  },
];

const useStyles = createUseStyles({
  main: {
    maxWidth: "1920px",
    width: "100%",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "rgba(212, 218, 219, 0.429)",
  },
  title: {
    color: "rgba(68, 97, 103, 0.904)",
    fontSize: "70px",
    "@media (max-width: 1024px)": { fontSize: "50px" },
    "@media (max-width: 720px)": { fontSize: "30px" },
  },
  article: {
    maxWidth: 1400,
    padding: 30,
    margin: "0 auto",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    padding: 40,
  },
  footer: {
    backgroundColor: "rgba(212, 218, 219, 0.429)",
    display: "block",
    textAlign: "center",
    padding: "30px",
  },
  p: { fontSize: 20, color: "black", margin: 0, padding: 0 },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": { color: "green" },
  },
});

function App() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <h1 className={classes.title}>Best Books of Century</h1>
      </header>
      <article className={classes.article}>
        <section className={classes.mainContainer}>
          {BOOKS.map((item) => {
            return (
              <Cards
                key={uuid()}
                url={item.url}
                bookName={item.bookName}
                bookFirstEdition={item.bookFirstEdition}
                bookAuthor={item.bookAuthor}
              />
            );
          })}
        </section>
      </article>
      <footer className={classes.footer}>
        <p className={classes.p}>Created with ♥ </p>
        <p className={classes.p}>
          For{" "}
          <a
            className={classes.link}
            href="https://www.instagram.com/it_teacher_am/"
            target="blank"
          >
            <i>IT Teacher AM</i>
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
