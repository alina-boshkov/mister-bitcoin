import React, { Component } from 'react';

export default class Filter extends Component {
    state = {
        filterBy: {
            term: ''
        }
    }
    onChangeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onFilter = () => {
        this.props.onFilter(this.state.filterBy)
    }

    render() {
        return <div>
            <input type="text" placeholder="Name/Phone" value={this.state.filterBy.term}
                onChange={this.onChangeInput} name="term" />
            <button className="btn" type="primary search-btn" onClick={this.onFilter}>Search</button>
        </div>
    }
}