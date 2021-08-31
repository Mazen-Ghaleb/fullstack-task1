// Books API
var axios = require('axios').default;

var options = {
  method: 'GET',
  url: 'https://book4.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'book4.p.rapidapi.com',
    'x-rapidapi-key': '1104345091msh7af939baa31f123p19a85djsna5e12bd734dd',
  },
};

const Books_info = (req, res) => {
  axios
    .request(options)
    .then(function (response) {
      res.render('Books', {heading: 'Top rated Books',response,
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports = {
  Books_info,
};
