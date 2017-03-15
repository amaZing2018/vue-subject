import fetch from '../config/fetch'
// import * as home from './tempdata/home'



/**
 * 创建临时数据
 */
// const setpromise = data => {
// 	return new Promise((resolve, reject) => {
// 		resolve(data)
// 	})
// }

//编译环境使用真实数据
if (process.env.NODE_ENV == 'development') {

	/**
	 * 获取首页默认地址
	 */

	var peopleGet = () => fetch('GET', '/comic/category',
    {
      key:'3ea55ced4fe35505f48808ace527b324'
    });



}else{

}



export {peopleGet}
