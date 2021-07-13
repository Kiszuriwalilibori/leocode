import { default as UnconnectedPagination } from "@material-ui/lab/Pagination";
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { changePage } from "../redux/usersReducer";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  page: state.users.currentPageNumber,
  count: state.users.numberOfPages,
  variant: "outlined",
  color: "secondary",
});

const mapDispatchToProps = dispatch => ({
  onChange: (event, value) => dispatch(changePage(value)),
});

const Pagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles({
    root: {
      margin: "40px auto",
      "@media (max-width: 666px)": { marginTop: "calc(15px + 25 * ((100vw - 320px) / 347));", marginBottom: "calc(15px + 25 * ((100vw - 320px) / 347));" },
      "& ul": { justifyContent: "center" },
      "& ul li": { paddingLeft: "5px", paddingRight: "5px" },
      "& button": { background: "rgba(122, 194, 33, 0.8)", color: "white", border: "1px solid #298B01", boxShadow: "inset 0 0 5px #298B01" },
      "& button.Mui-selected": { background: "#F5C200", color: "black", border: "1px solid #EE760A", boxShadow: "inset 0 0 5px #EE760A" },
    },
  })(React.memo(UnconnectedPagination))
);

UnconnectedPagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Pagination;
