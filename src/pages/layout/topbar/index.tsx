import * as React from "react";
import * as classNames from "classnames";
import { NavLink, withRouter } from "react-router-dom";
import history from "@/utils/history";

// const styles = require("./index.less");

class TopBar extends React.Component<{}, {}> {
  goToOverview = () => {
    history.push("/overview");
  };
  render() {
    return (
      <div >
        <div className="container">
          <div >
            <div
              
              onClick={this.goToOverview}
            />
            <div >
              <ul>
                <li>
                  <NavLink  to="/">
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink  to="/my">
                    MY
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default withRouter(TopBar);
export default TopBar;
