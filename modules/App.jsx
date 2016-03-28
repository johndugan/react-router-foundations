import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink.jsx';

export default React.createClass({
  render: function() {
    return (
        <div>
            <h1>Hello, React Router Tutorial!</h1>
            <ul role="nav">
                {/*
                    `<NavLink>` is a wrapper component around React Rounter's
                    `<Link>` component. The purpose is to take advantage
                    of React's component architecture to prevent us from
                    have to declare the `activeClassName` over and over.
                */}
                {/*
                    The `onlyActiveOnIndex` property prevents the "Home" link
                    from having the active class/state unless you are actually
                    on the `/` route. This is because every route is a child
                    of the `/` route. So, without the `onlyActiveOnIndex`
                    property, the "Home" link would always be in the active
                    state.

                    Note: the `<IndexLink>` component can also be used. In
                    this case I don't use it becuase I am using our custom
                    `<NavLink>` component. And under the hood, like our
                    `<NavLink>` component, `<IndexLink>` is just a
                    wrapper around the `<Link>` component on whick the
                    `onlyActiveOnIndex` property is.
                */}
                <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
            </ul>
            <p><Link to="/contact">Contact</Link></p>

            {/*
                `this.props.children` is used to render the contents
                of the active nested route.
            */}
            {this.props.children}
        </div>
    );
  }
})

