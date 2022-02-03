import './init';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('../pug/', true, /\.js$/));
importAll(require.context('../../src', true, /\.scss$/));
