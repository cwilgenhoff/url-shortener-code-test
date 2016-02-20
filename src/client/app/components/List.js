import React, { Component, PropTypes } from 'react';

class List extends Component {
  render() {
    return (
      <div className="shortened-urls">
        <ul>
          {
            this.props.urls.map(url =>
              <li> <a href={ "/api/url/" + url.id }>{url.url}</a> </li>
            )
          }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.object)
};

export default List;
