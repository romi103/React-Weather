var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div>
            <h2>Nav bar</h2>
            <IndexLink to='/' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            <Link to='/about' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            <Link to='/example' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
        </div>
    );
}
 

module.exports = Nav;