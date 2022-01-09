import '../scss/index.scss';
function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('../pug/', true, /\.js$/));
