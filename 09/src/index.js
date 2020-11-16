import axios from 'axios'
var instance = axios.create({ headers: { 'content-type': 'application/x-www-form-urlencoded' } });
instance.get('/api/data.json').then(res => {
    console.log(res);
})