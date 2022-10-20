import axios from "axios";

export const url = 'http://81.68.121.52:8000/';

export default axios.create({
    baseURL: 'http://81.68.121.52:8000/', //默认地址
    timeout: 5000,  // 超时处理
})