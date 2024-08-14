import React, { Fragment } from "react";

import cx from "classnames";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearch: true,
    };
  }

  render() {
    return (
      <Fragment>
        <div className={cx("search-wrapper", {
            active: this.state.activeSearch,
          })}>
          <div className="input-holder">
            <input type="text" className="search-input" placeholder="Type to search"/>
            <button onClick={() =>
                this.setState({ activeSearch: !this.state.activeSearch })
              }
              className="search-icon">
              <span />
            </button>
          </div>
          {/* <button onClick={() =>
              this.setState({ activeSearch: !this.state.activeSearch })
            }
            className="btn-close"/> */}
        </div>
        <button type="button" data-toggle="tooltip" title="" data-placement="bottom" class="btn-shadow me-1 btn" data-original-title="Example Tooltip">
<i class="fa fa-bell"></i>
</button>
<button type="button" data-toggle="tooltip" title="" data-placement="bottom" class="btn-shadow btn" data-original-title="Example Tooltip">
<i class="fa-regular fa-moon"></i>
</button>
      </Fragment>
    );
  }
}

export default SearchBox;
