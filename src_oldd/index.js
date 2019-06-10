// 1. import react and react dom librareis 
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
// import faker from 'faker';
// import CommentDetail from './CommentDetail';    
// import ApprovalCard from './ApprovalCard';
// 2. Create a react Component
// const App = ()=> {  
//     const button = 'click me';
//     return(
//     <div>
//         <label className="label" htmlFor="name">Enter name</label>
//         <input type ="text" id="name" />
//         <button style={{ backgroundColor:'blue', color:'white' }}>{ button }</button>
//     </div>
//     );
// }

// const App = ()=> {
//     return(
//         <div className="ui container comments">
//             <h1>Comment Section</h1>
//             <ApprovalCard>
//                 <CommentDetail 
//                     author="sam"
//                     timeAgo="24 minutes ago" 
//                     userComment="very nyc pic" 
//                     avtar={ faker.image.avatar() }
//                 />
//             </ApprovalCard>
//             <ApprovalCard>
//                 <CommentDetail 
//                     author="somu" 
//                     timeAgo="23 minutes later" 
//                     userComment="test nyc image" 
//                     avtar={ faker.image.avatar() } 
//                 />
//             </ApprovalCard>
//             <ApprovalCard>
//                 <CommentDetail author="Helo" 
//                     timeAgo="25 minutes before" 
//                     userComment="test Hello image" 
//                     avtar={ faker.image.avatar() } 
//                 />
//             </ApprovalCard>
//         </div>
//     );
// }
//3. Take that React Component and show it on screen 

// const App = ()=> {
//    window.navigator.geolocation.getCurrentPosition(position =>{console.log(position.coords.latitude)},err=>console.log(err));
//    return <h1>Hello </h1>;
// };

// eooor handling

class App extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = { 'lat': 40,'eoorMessage':'' };
    // }
    state = { 'lat': null,'eoorMessage':'' };
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat:position.coords.latitude})
            },
            err=>this.setState({eoorMessage:err.message })
        );
    }

    componentDidUpdate(){
        console.log('reenders');
    }
    render(){
       
        if(this.state.eoorMessage && !this.state.lat){
            return <div>ErrorMessage:{this.state.eoorMessage}</div>;
        }

        if(!this.state.eoorMessage && this.state.lat){
            return <SeasonDisplay lat ={this.state.lat} />
        }
        return (<Loader />);
    }
}
ReactDOM.render(<App />,document.getElementById('root'));
    