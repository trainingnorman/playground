var React = require('react'),
    people = [
        {
            name: 'geoff',
            job: 'machine man'
        },
        {
            name: 'bill',
            job: 'wood cutter'
        }
    ];

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                <strong>{this.props.name}: </strong>
                {this.props.job}
            </li>
        )
    }
})

var List = React.createClass({
    getInitialState: function() {
        return {people: people}
    },
    render: function() {
        return (
            <ul>
                {
                    this.state.people.map(function(person) {
                        return (
                            <ListItem name={person.name} job={person.job}/>
                        )
                    })
                }
            </ul>
        )
    }
})

var App = React.createClass({

    render: function() {
        return (
            <List></List>
        )
    }
})

React.render(<App/>, document.getElementById('app'));