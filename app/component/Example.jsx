var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few location to try out</p>
            <ol>
                <li>
                    <Link to='/?location=London'>London, UK</Link>
                </li>
                <li>
                    <Link to='/?location=Warsaw'>Warsaw, Ploand</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Example;