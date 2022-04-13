// __esModule - javascript 환경
// CommonJS version - 노드 환경에서

//노드 JS 환경에서 적용됨
//import module from 'autoprefixer'
//export module
/* export {
    plugins: [autoprefixer]
}*/

// import
const autoprefixer =
	// export
	(module.exports = {
		plugins: [require('autoprefixer')],
	});
