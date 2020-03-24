import React, { Component, Fragment } from "react";
import Modal from "./../../components/UI/Modal/Modal";

const WithErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });

      this.resInterceptors = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.reject(this.reqInterceptors);
      axios.interceptors.response.reject(this.resInterceptors);
    }

    errorConfirmHandler = () => {
      this.setState({
        error: null
      });
    };

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default WithErrorHandler;
