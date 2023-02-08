import { useState } from "react"
import PropTypes from 'prop-types'
import { getGifsBySearchQuery } from "../api"

const SearchForm = ({ setGifs }) => {
  const [searchVal, setSearchVal] = useState("")
  const disableSubmit = searchVal.length === 0

  const handleSearchInputChange = (e) => {
    setSearchVal(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, pagination } = await getGifsBySearchQuery(searchVal)
    setGifs({ data, pagination })
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

SearchForm.propTypes = {
  setGifs: PropTypes.func.isRequired,
}


export default SearchForm
