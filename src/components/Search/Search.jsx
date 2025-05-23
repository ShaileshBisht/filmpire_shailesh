import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchMovie } from "../../features/currentGenreOrCategory";
import useStyles from "./Styles.js";

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  // console.log("Search");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //   console.log("here", query);
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== "/") return null;

  return (
    <div className={classes.searchContainer}>
      <TextField
        placeholder="Search Movies...."
        value={query}
        onKeyPress={handleKeyPress}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdorment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
