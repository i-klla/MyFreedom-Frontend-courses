import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import classes from "./HomePage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect } from "react";
import axios from "axios";

function HomePage() {

  useEffect(() => {
    fetchPopularMovies()
  },[])

  async function fetchPopularMovies() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?pag1`', {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      })
      console.log(response)
    }
    catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      <CustomNavbar />
      <Container fluid="xl" className={classes.cardContainer}>
          <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-2">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col key={idx}>
                  <MovieCard />
              </Col>
            ))}
          </Row>
      </Container>
    </>
  );
}

export default HomePage;
