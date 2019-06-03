import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = formValues => {
    this.props.updateStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return "LOADING..";
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamEdit);
