let list = [];

module.exports = {

    create(req, res) {
        console.log('You sent me this data', req.body);
        let movie = req.body
        movie.Watched = false
        list.push(movie)
        res.json(list)
    },

    read(req, res) {
        res.json(list)
    },

    update(req, res) {
        console.log('You sent me this data watched', req.body);
        list.forEach((e, i, a) => {
            if(e.ID === req.params.id) {
                e.Watched = true
            }
        })
        res.json(list)
    },

    delete(req, res) {
        console.log('You sent me this data delete', req.params);
        list.forEach((e, i, a) => {
            if(e.ID === req.params.id) {
                list.splice(i, 1)
            }

        })
        res.json(list)
    },

    clear(req, res) {
        console.log('You sent me this data delete', req.params);
        list = []
        res.json(list)
    },
}
