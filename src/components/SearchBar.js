import React from "react";

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    onChange = (event) => {
        this.setState({ term: event.target.value});
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"  onChange={this.onChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
