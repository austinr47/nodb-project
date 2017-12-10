module.exports = {

    create(req, res) {
        console.log('You sent me this data', req.body);
        
        res.json()
    },

    read(req, res) {
        console.log('You sent me this data', req.body);

        res.json()
    },

    update(req, res) {
        console.log('You sent me this data', req.body);

        res.json()
    },

    delete(req, res) {
        console.log('You sent me this data', req.body);

        res.json()
    },
}





// http://www.omdbapi.com/?PUT+THE+ENDPOINT+HERE&apikey=97ad0e64