//required
const fs = require('fs');

let listTable = (base, limit = 10) => {

    let data = '';

    if (!Number(base) || !Number(limit)) {
        reject(`Los valores introducidos ${base} or ${limit} no son numeros`);
        return;
    }


    console.log('=========================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=========================='.green);


    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let createFile = (base, limit = 10) => {


    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limit)) {
            reject(`Los valores introducidos ${base} or ${limit} no son numeros`);
            return;
        }

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limit}.txt`.blue);

        });

    });
};

module.exports = {
    createFile,
    listTable
}