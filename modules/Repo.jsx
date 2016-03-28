import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
                {/*
                    Because the route pointing to this component
                    uses URL parameters, those parameters will be
                    accessible on the `this.props.params` object.
                */}
                <p><em>Created by: <strong>{this.props.params.userName}</strong></em></p>
            </div>
        );
    }
});
