import axios from 'axios';
const KEY = 'AIzaSyD54XNKM5S_sAdaaIkwSppLHJrJzKhMhxs';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResult: 5,   
        key:KEY
    }
});