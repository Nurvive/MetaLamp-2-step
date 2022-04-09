import './init';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('../', true, /\.js$/));
importAll(require.context('../../src', true, /\.scss$/));
