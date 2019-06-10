import React from 'react';

class SearchBar extends React.Component{
    onFormSubmit= (event)=> {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    state ={term:''};
    render(){
        return( 
        <div className="ui sagment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                </div>
            </form>
        </div>
    );
    }
}

export default SearchBar;   