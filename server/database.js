let mongooseConexion = require('mongoose');

mongooseConexion.connect('mongodb://127.0.0.1:27017/PrestaCash', { useNewUrlParser: true }).then(() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.log(err);
});

module.exports = mongooseConexion;