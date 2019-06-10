import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {
                video : [] ,
                selectedVideo :null
            };
    onTermSubmit = async (term)=>{
        //console.log(term);
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        //console.log(response.data.items);
        this.setState({video:response.data.items})
    }

    onVideoSelect = (video)=>{
        //console.log('from the app',video);
        this.setState({selectedVideo:video});
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormsSubmit ={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"> 
                        <VideoDetail video = {this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect = { this.onVideoSelect } videos ={this.state.video}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;