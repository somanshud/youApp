import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{

    state ={ image:[]};
    /*onSearchSubmit =(term)=>{
        console.log(term)
        // 1.  One way is to get response via Promise
        // axios.get('https://api.unsplash.com/search/photos',{
        //     params:{ query:term},
        //     headers:{
        //         Authorization:'Client-ID 0d3b9f8d35c2e445cecbe2106a0a884eb09f0090b798bc735b81f4dda48d1af3'
        //     }
        // })
        // .then((response)=>{
        //     console.log(response.data.results);
        // })
    }*/


    onSearchSubmit= async (term)=> {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{ query:term},
            headers:{
                Authorization:'Client-ID 0d3b9f8d35c2e445cecbe2106a0a884eb09f0090b798bc735b81f4dda48d1af3'
            }
        });
        this.setState({image:response.data.results});
    }
    render(){
        return (
            <div className="ui container" style ={{ marginTop:'10x'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.image.length} photos
                <ImageList images={this.state.image}/>
            </div>
        );
    }
}
export default App;