import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { clearError } from "../redux/usersReducer";
import PropTypes from "prop-types";

const MyAlert = withStyles({
  root: {
    background: "#F7DE00",
    color: "black",
    fontSize: "1.25rem",
    fontWeight: "bold",
    border: "2px solid #F60A13",
    boxShadow: " 0 0 5px #4d684d, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
  },
})(Alert);

let ErrorMessageBox = props => {
  const { isErrorMessageOpen, clearError, errorMessageText } = props;

  return isErrorMessageOpen ? (
    <Snackbar open={isErrorMessageOpen} autoHideDuration={5000} onClose={clearError}>
      <MyAlert severity="success" variant="filled">
        An error occured:
        <br />
        {errorMessageText}
        <br />
      </MyAlert>
    </Snackbar>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
});

const mapStateToProps = state => ({
  isErrorMessageOpen: state.users.error.value,
  errorMessageText: state.users.error.code,
});

ErrorMessageBox = connect(mapStateToProps, mapDispatchToProps)(ErrorMessageBox);

export default ErrorMessageBox;

ErrorMessageBox.propTypes = {
  isErrorMessageOpen: PropTypes.bool,
  errorMessageText: PropTypes.string,
  clearError: PropTypes.func,
};
