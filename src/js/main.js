import "../scss/index.scss"
// import '../scss/common/colors.scss'
// import '../pug/pages/colors-type/index-colors-type'
// import '../pug/pages/colors-type/index-colors-type'
// import '../pug/pages/colors-type/colors-type-kit/colors-type.scss'
// import "../pug/index.pug"
// import "../pug/blocks/header/header-kit/header"
// import "../pug/pages/colors-type/colors-type.pug"
function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('../pug/', true,/\.js$/))
