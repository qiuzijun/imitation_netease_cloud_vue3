import request from '@/utils/axiosReq.js'

export const personalized = (params)=> request({
    url:'/playlist/detail',
    method: 'post',
    params
})