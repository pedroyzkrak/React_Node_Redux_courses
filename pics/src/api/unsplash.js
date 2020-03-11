    import axios from 'axios';

    export default axios.create( {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID OoFrDqvdnPru3LQqQSBUG7rKH5EsGphIjISuZXRRi0o'
        }
    });