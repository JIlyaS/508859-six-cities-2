import React from "react";
import PropTypes from "prop-types";

import Header from "../header/header";
import {getClassPageName} from "../../utils";

const PageLayout = (props) => {
  const {pageName, children} = props;
  const classPageName = getClassPageName(pageName);
  return (
    <div className={classPageName}>
      <Header />
      {children}
    </div>
  );
};

PageLayout.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLayout;
