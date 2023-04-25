import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesError,
  getMoviesLoading,
  getMoviesSuccess,
} from "../Features/Movies/actions";

export const Movies = () => {
  const [movie, setMovie] = useState("");
  //console.log(movie);

  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((state) => ({
    loading: state.movieState.loading,
    movies: state.movieState.movies,
    error: state.movieState.error,
  }));

  async function getMovies() {
    try {
      dispatch(getMoviesLoading());
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=999d1f32&s=${movie}`
      ).then((d) => d.json());
      dispatch(getMoviesSuccess(data.Search));
    } catch (err) {
      dispatch(getMoviesError(err));
    }
  }
  console.log(movies); // log the movies variable to the console
  return (
    <div>
      <Heading>Movie Search</Heading>
      <Input
        type="text"
        placeholder="Search Your Movies"
        onChange={(e) => {
          setMovie(e.target.value);
        }}
      />
      <Button colorScheme="facebook" onClick={getMovies}>
        Search
      </Button>

      {movies &&
        movies.map((movie) => (
          <Card
            key={movie.imdbID}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={movie.Poster}
              alt="Poster"
            />
            <Stack>
              <CardBody>
                <Heading size="md">Title : {movie.Title}</Heading>

                <Heading size={"sm"}>Type : {movie.Type}</Heading>
                <Heading size={"sm"}>Year :{movie.Year}</Heading>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Movie on Demand
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
    </div>
  );
};
