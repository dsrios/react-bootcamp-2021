import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import VpnKey from "@material-ui/icons/VpnKey";
import PlusOne from "@material-ui/icons/PlusOne";
import LocalHospital from "@material-ui/icons/LocalHospital";

import { Login } from "./components/Login";
import { Counter } from "./components/Counter";
import { Sicknesses } from "./components/Sicknesses";

type AppState = {
  currentTab: number;
};

export default class AppLifeCycle extends React.Component<{}, AppState> {
  //private inputRef = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  handleTabChange = (tabIndex: number) => {
    this.setState({ currentTab: tabIndex });
  };

  render() {
    return (
      <React.Fragment>
        <BottomNavigation
          value={this.state.currentTab}
          onChange={(event, tabIndex) => this.handleTabChange(tabIndex)}
          showLabels
        >
          <BottomNavigationAction label="Sicknesses" icon={<LocalHospital />} />
          <BottomNavigationAction label="Counter" icon={<PlusOne />} />
          <BottomNavigationAction label="Login" icon={<VpnKey />} />
        </BottomNavigation>
        {this.state.currentTab === 0 && <Sicknesses />}
        {this.state.currentTab === 1 && <Counter />}
        {this.state.currentTab === 2 && <Login />}
      </React.Fragment>
    );
  }
}
