const axios = require('./plugins/axios').default
const fetchComments = function () {
	return axios.get('https://jsonplaceholder.typicode.com/comments?_page=1')
}
export const aa = 1
export default {
	fetchComments
}