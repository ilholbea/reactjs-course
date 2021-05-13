import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button" onClick={this.onDismiss}>
          Cancel
        </button>
        <button className="ui button negative" onClick={this.onDelete}>
          Delete
        </button>
      </React.Fragment>
    );
  }

  onDismiss() {
    history.push('/');
  }

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title '${this.props.stream.title}'`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
