import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Latest from "../components/Latest";
import Politics from "../components/Politics";
import Sports from "../components/Sports";
import Science from "../components/Science";
import Entertainment from "../components/Entertainment";
import Health from "../components/Health";
import toast from "react-hot-toast";
import axios from "axios";
import SearchResult from "../components/SearchResult";

function Home() {
  const [searchResults, setSearchResults] = useState(null);

  const searchQuery = async (query) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );

      setSearchResults(res.data);
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchResults={setSearchResults}/>
      {searchResults && <SearchResult data={searchResults} />}

      {!searchResults && (
        <>
          <Latest />
          <Politics />
          <Health />
          <Sports />
          <Science />
          <Entertainment />
        </>
      )}
    </div>
  );
}

export default Home;
