// import React, { Component, useEffect, Fragment } from "react";
// import { withRouter } from "react-router-dom";

// class ScrollToTop extends Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     return this.props.children;
//   }
// }

// export default withRouter(ScrollToTop);
import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
