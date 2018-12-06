import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { searchText: "" };

  onInputChange = e => {
    this.setState({ searchText: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchText);
  };

  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography>Youtube Clone</Typography>
          <div>
            <form onSubmit={this.onFormSubmit}>
              <InputBase
                placeholder="Buscar..."
                value={this.state.searchText}
                onChange={this.onInputChange}
                style={{color: 'inherit', width: '300px'}}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default SearchBar;
