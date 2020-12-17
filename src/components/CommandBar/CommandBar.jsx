import React from 'react';
import { connect } from 'react-redux';
import { executeCommand } from '../../actions';

class CommandBar extends React.Component {
    state = {
      command: '',
    };
  
    onCommandSubmit = (e) => {
      this.props.executeCommand(this.state.command);
      this.setState({
        command: '',
      });
      e.preventDefault();
    };
  
    onCommandChange = (e) => {
      this.setState({
        command: e.target.value,
      });
    };
  
    render() {
      return (
        <section className="command-bar">
          <form className="input-group" onSubmit={this.onCommandSubmit}>
            <input
              value={this.state.command}
              onChange={this.onCommandChange}
              type="text"
              className="form-control"
              placeholder="Type your command"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">Execute</button>
            </div>
          </form>
        </section>
      );
    }
  }
  
  const mapDispatchToProps = {
    executeCommand,
  };

  export default connect(null, mapDispatchToProps)(CommandBar);
