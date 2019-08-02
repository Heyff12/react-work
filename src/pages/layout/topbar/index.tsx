import * as React from "react";
import * as classNames from "classnames";
import { NavLink, withRouter } from "react-router-dom";
import history from "@/utils/history";

const styles = require("./index.scss");

class TopBar extends React.Component<{}, {}> {
  goToOverview = () => {
    history.push("/overview");
  };
  render() {
    return (
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.left}>
            <div
              className={classNames(styles.logo, "icon-LOGO")}
              onClick={this.goToOverview}
            />
            <div className={styles.nav}>
              <ul>
                <li>
                  <NavLink activeClassName={styles.active} to="/">
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName={styles.active} to="/my">
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
