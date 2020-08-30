const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', options)
    .command('create', 'Crear la tabla de multiplicar con base y limite', options)
    .help()
    .argv;

module.exports = {
    argv
}