import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'
import Close from '../icons/Close'

const SearchField = ({ handleChange, isSearch }) => {
  const [search, setSearch] = React.useState('')
  const handleEntry = (e) => {
    e.preventDefault()
    handleChange(search)
  }

  const handleChangeSearch = (e) => {
    console.log(search)
    setSearch(e.target.value)
  }
  return (
    <form onSubmit={handleEntry}>
      <div className="search-input input" style={{ marginBottom: '0' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ borderRadius: '42px' }}
          onChange={handleChangeSearch}
        />
        <Button className="clear icon" onClick={() => setSearch('')}>
          {!isSearch ? (
            <Image
              src="/assets/images/search.svg"
              alt="Search"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/images/close.svg"
              alt="Search"
              width={20}
              height={20}
            />
          )}
          {/* <Close handleClick={null} /> */}
        </Button>
      </div>
    </form>
  )
}

export default SearchField
