/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import utils from './utility.js';
import Datastore from '@yetzt/nedb';
export const database = new Datastore({ filename: 'database.db', autoload: true });
export const names = new Map([
    ['Dermanique', 'Dermanique Lee'],
    ['Max', 'Max Corthesy'],
    ['Daniel', 'Daniel Smith'],
    ['Juan', 'Juan Gomez'],
    ['Tori', 'Tori Senior'],
    ['Miyah', 'Miyah Akira Hoo-Sang'],
    ['London', 'London Sands'],
    ['Kelsey', 'Kelsey Chang'],
    ['Jaimie-lin', 'Jaimie-lin Barrett'],
    ['Jailan', 'Jailan Barrett'],
    ['Joshua', 'Joshua Rattray'],
    ['Valorie', 'Valorie Lee'],
    ['Ashter', 'Ashter'],
    ['Paul', 'Paul Cooper'],
    ['Shayne', 'Shayne Macfarlayne'],
    ['Niara', 'Niara Baker'],
    ['Kennedy', 'Kennedy Black'],
    ['Malakai', 'Malakai Bryan'],
    ['John-Michael', 'John-Michael Bryson'],
    ['Leonard', 'Leonard Facey'],
    ['Lindsey', 'Lindsey Hall'],
    ['Jahvid', 'Jahvid West']
]);
export const ships = {};
export function add(array) {
    const vnames = array[0];
    const vname = vnames[0].toLowerCase();
    const unames = array[1];
    const name1 = array[2];
    const name2 = array[3];
    const status = array[4];
    const object = {
        verified_names: vnames,
        other_names: unames,
        n1: name1,
        n2: name2,
        ship: `${name1} x ${name2}`,
        status: status
    };
    ships[vname] = object;
    const idships = ships;
    idships._id = 'ships';
    database.insert(idships);
}
export function multiAdd(bigarray) {
    for (const array of bigarray) {
        const vnames = array[0];
        const vname = vnames[0];
        const unames = array[1];
        const name1 = array[2];
        const name2 = array[3];
        const status = array[4];
        const object = {
            verified_names: vnames,
            other_names: unames,
            n1: name1,
            n2: name2,
            ship: `${name1} x ${name2}`,
            status: status
        };
        ships[vname] = object;
    }
    const idships = ships;
    idships._id = 'ships';
    database.insert(idships);
}
add([['dermax'], ['manimax', 'maxinique', 'dermanix', 'dermaxique', 'dermamax'], names.get('Dermanique'), names.get('Max'), 'Canon']);
const namesobj = utils.obj(names);
namesobj._id = 'names';
database.insert(namesobj);
