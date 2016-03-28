import React from 'react';
import {Link} from 'react-router';
import SalesFrom from './SalesForm.jsx';
import ManagementForm from './ManagementForm.jsx';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h2>Contact Form</h2>
                <ul>
                    {/*
                        `<Link>` is used in place of the standard `<a>`
                        element when you want the link to be self-aware.
                        That is to say that each `<Link>` component knows
                        when it's active or inactive.
                    */}
                    {/*
                        The `activeClassName` and `activeStyle` attributes
                        are pretty self explanatory. These are possible
                        because, as I said above, the `<Link>`component
                        is self-aware.
                    */}
                    <li><Link to="/contact/sales" activeClassName="active-link" activeStyle={{ color: 'red' }}>Sales</Link></li>
                    <li><Link to="/contact/management" activeClassName="active-link" activeStyle={{ color: 'red' }}>Management</Link></li>
                </ul>

                {/*
                    `this.props.children` is used to render the contents
                    of the active nested route.
                */}
                {this.props.children}

            </div>
        );
    }
});
