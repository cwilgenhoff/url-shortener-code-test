import React, { Component, PropTypes } from 'react';

class List extends Component {
  render() {
    return (
      <div className="shortened-urls">
        <ul>
          {
            this.props.urls.map(url =>
              <li key={url.id} >
                <a href={ "/api/url/" + url.id }>{ '----(' + url.id + ')---> ' + url.url}</a>
              </li>
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
