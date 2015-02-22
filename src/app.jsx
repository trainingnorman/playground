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
                <button onClick={this.props.onClick}>Delete</button>
            </li>
        )
    }
})

var List = React.createClass({
    getInitialState: function() {
        return { people: people }
    },
    deletePerson: function(person) {
        this.state.people.splice(this.state.people.indexOf(person), 1);

        this.setState(this.state);
    },
    render: function() {
        var self= this;
        return (
            <ul>
                {
                    this.state.people.map(function(person) {
                        return (
                            <ListItem
                                name={person.name}
                                job={person.job}
                                onClick={self.deletePerson.bind(null, person)}/>
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