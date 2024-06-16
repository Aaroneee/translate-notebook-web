import axios from 'axios'
axios.defaults.baseURL = '/api'
export default {

    /**
     * describe: Get请求参数
     *
     * @Author: Aaron
     * @Date: 2023/6/12 21:47
     */
    get(url, param) {
        return axios({
            method: "GET",
            url: url,
            params: param
        })
    },

    /**
     * describe: Post请求参数
     *
     * @Author: Aaron
     * @Date: 2023/6/12 21:47
     */
    post(url, data) {
        return axios({
            method: "POST",
            url: url,
            data: data
        })
    },

     put(url, data) {
        return axios({
            method: "PUT",
            url: url,
            data: data
        })
    }
}