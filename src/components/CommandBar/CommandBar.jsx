import React from 'react';

const CommandBar = () => {
  return (
    <section className="command-bar">
      <form className="input-group">
        <input type="text" className="form-control" placeholder="Type your command" />
        <div className="input-group-append">
          <button className="btn btn-primary">Execute</button>
        </div>
      </form>
    </section>
  );
};

export default CommandBar;
