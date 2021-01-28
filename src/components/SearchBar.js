import React from "react"

class SearchBar extends React.Component {
  state = { myInput: "" }
  onInputValue = (event) => {
    this.setState({ myInput: event.target.value })
  }
  onSubmitForm = (event) => {
    event.preventDefault()
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "12px" }}>
        <div className="search-container">
          <form onSubmit={this.onSubmitForm}>
            <label className="form-label fw-bold fs-4">Search your videos</label>
            <input className="form-control me-2" value={this.state.myInput} type="search" placeholder="Search" aria-label="Search" onChange={this.onInputValue} />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar