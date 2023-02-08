import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("")
  const disableSubmit = searchVal.length === 0
  const navigate = useNavigate()

  const handleSearchInputChange = (e) => {
    setSearchVal(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate(`/?q=${searchVal}`)
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
        <button
          type="submit"
          disabled={disableSubmit}
          value="submit"
          className="btn-primary"
          name="search-button"
        >
          Search!
        </button>
      </form>
    </div>
  )
}

export default SearchForm
