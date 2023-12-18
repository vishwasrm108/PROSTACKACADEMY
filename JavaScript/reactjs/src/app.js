import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <form>
              <h3 style={{ color: 'white' }}>Venue Admin Login</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    style={{backgroundColor:'black',color:"white"}}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    style={{backgroundColor:'black',color:'white',}}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-purple">
                  Sign In
                </button>
                <br />
                <small style={{color:'white'}}>New Registration?
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
