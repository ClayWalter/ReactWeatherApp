var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to test out the app:</p>
        <ol>
          <li>
            <Link to='/?location=Kingston'>Kingston, NY</Link>
          </li>
          <li>
            <Link to='/?location=Austin'>Austin, TX</Link>
          </li>
        </ol>
    </div>
    )
  };

module.exports = Examples;
