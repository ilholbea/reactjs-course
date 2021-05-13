import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  actions() {
    return <button className="ui button primary">Save Stream</button>;
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} actions={this.actions} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
