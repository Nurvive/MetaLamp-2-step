import '../scss/index.scss';
import './init';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('../pug/', true, /\.js$/));
