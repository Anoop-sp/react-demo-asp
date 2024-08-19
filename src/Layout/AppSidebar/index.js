import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import Nav from "../AppNav/VerticalNavWrapper";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo";
import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";
import { Slider } from "react-burgers";

class AppSidebar extends Component {
  state = {
    items: [{ id: 1, text: "Buy eggs" }],
    active: false,
    mobile: false,
    activeSecondaryMenuMobile: false,
  };

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };
  toggleEnableClosedSidebar = () => {
    let { enableClosedSidebar, setEnableClosedSidebar } = this.props;
    setEnableClosedSidebar(!enableClosedSidebar);
  };
  render() {
    let {
      backgroundColor,
      enableBackgroundImage,
      enableSidebarShadow,
      backgroundImage,
      backgroundImageOpacity,
    } = this.props;

    return (
      <Fragment>
        <div
          className="sidebar-mobile-overlay"
          onClick={this.toggleMobileSidebar}
        />
        <TransitionGroup>
          <CSSTransition
            component="div"
            className={cx("app-sidebar", backgroundColor, {
              "sidebar-shadow": enableSidebarShadow,
            })}
            appear={true}
            enter={false}
            exit={false}
            timeout={500}
          >
            <div>
              <HeaderLogo />
              <PerfectScrollbar>
                {/* <div className="header__pane ms-auto">
                  <div
                    onClick={this.toggleEnableClosedSidebar}
                    style={{ textAlign: "right" }}
                  >
                    <Slider
                      width={26}
                      lineHeight={2}
                      lineSpacing={5}
                      color="#6c757d"
                      active={this.state.active}
                      onClick={() =>
                        this.setState({ active: !this.state.active })
                      }
                    />
                  </div>
                </div> */}
                <div className="app-sidebar__inner">
                  <Nav />
                </div>
              </PerfectScrollbar>
              <div
                className={cx("app-sidebar-bg", backgroundImageOpacity)}
                style={{
                  backgroundImage: enableBackgroundImage
                    ? "url(" + backgroundImage + ")"
                    : null,
                }}
              ></div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage,
  backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
