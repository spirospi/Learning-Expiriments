function SearchBar({ search, setSearch, handleSearch, loading }) {
  return (
    <div>
         <input value={search} 
    
    onChange={event => setSearch(event.target.value)}
    />
    
     
    

      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>


    </div>
  );
}

export default SearchBar;