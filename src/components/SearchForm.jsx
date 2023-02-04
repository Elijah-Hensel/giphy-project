import { useState } from "react"

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("")
  console.log(searchVal)

  const handleSearchInputChange = (e) => { 
    setSearchVal(e.target.value)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(searchVal)
  }

  return (
    <div className="search-form-container">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form-input"
          type="text"
          name="search-params"
          value={searchVal}
          onChange={handleSearchInputChange}
          placeholder="What kind of GIF would you like to see..?"
        />
        <button type="submit" value="submit" className="btn-primary">
          Search!
        </button>
      </form>
    </div>
  )
}

export default SearchForm
