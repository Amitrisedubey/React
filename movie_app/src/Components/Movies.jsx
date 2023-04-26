import {
  Button,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Card,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  getMoviesError,
  getMoviesLoading,
  getMoviesSuccess,
} from "../Movies/action";
import { useDispatch, useSelector } from "react-redux";

export const Movies = () => {
  const [text, setText] = useState("");
  console.log(text);
  const { loading, movies, error } = useSelector((state) => ({
    loading: state.loading,
    movies: state.moviess,
    error: state.error,
  }));
  const dispatch = useDispatch();
  async function getmovies() {
    try {
      dispatch(getMoviesLoading());
      const data = await fetch(
        `http://www.omdbapi.com/?t=${text}&apikey=702d453a`
      ).then((d) => d.json());
      dispatch(getMoviesSuccess(data));
    } catch (err) {
      dispatch(getMoviesError(err));
    }
  }
  console.log(movies);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Something Went Wrong</div>
  ) : (
    <div>
      <Heading marginBottom={25}>Movies</Heading>
      <div>
        <hr />
        <Input
          onChange={(e) => {
            setText(e.target.value);
          }}
          width={750}
          height={50}
          placeholder="Search your Movie here............."
        />{" "}
        <Button
          onClick={getmovies}
          colorScheme="whatsapp"
          marginLeft={15}
          height={50}
        >
          Search
        </Button>
        <hr style={{ color: "black" }} />
      </div>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "50%", sm: "400px" }}
          src={`${movies.Poster}`}
        />

        <Stack background={"blue.100"}>
          <CardBody textAlign={"left"} marginBottom={45}>
            <Heading
              size="2xl"
              color={"brown"}
              textAlign={"center"}
              pr={25}
              marginBottom={25}
            >{`${movies.Title}`}</Heading>
            <Heading textAlign={"center"} color={"green"} size="md">
              Starring {`${movies.Actors}`}
            </Heading>
            <Heading size="sm">{`${movies.Genre}`}</Heading>
            <Heading size="sm">Language - {`${movies.Language}`}</Heading>
            <Heading size="sm"> Released - {`${movies.Released}`}</Heading>
            <Heading size="sm"> Year - {`${movies.Year}`}</Heading>
            <Heading size="sm"> Rated - {`${movies.Rated}`}</Heading>
            <Heading size="sm"> Type - {`${movies.Type}`}</Heading>
            <Heading size="sm"> Director - {`${movies.Director}`}</Heading>
            <Heading size="sm"> Writer - {`${movies.Writer}`}</Heading>
            <Heading size="sm"> imdbRating - {`${movies.imdbRating}`}</Heading>
            <Heading size="sm">
              totalSeasons - {`${movies.totalSeasons}`}
            </Heading>
            <Heading size="sm">Directed by {`${movies.Director}`}</Heading>
            <Heading size="sm"> Runtime : {`${movies.Runtime}`}</Heading>
            <Heading size="sm">{`${movies.Awards}`}</Heading>
            <Heading size="sm">Country {`${movies.Country}`}</Heading>

            <Heading color={"brown"} size={"md"}>{`${movies.Plot}`}</Heading>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};
