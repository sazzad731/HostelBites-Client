import React, { useState } from 'react';
import { SearchContext } from './SearchContext';

// this provider or context used for banner search

const SearchProvider = ({children}) => {
  const [ search, setSearch ] = useState("");
  const searchInfo = {
    search, setSearch
  }

  return <SearchContext value={searchInfo}>{children}</SearchContext>
};

export default SearchProvider;