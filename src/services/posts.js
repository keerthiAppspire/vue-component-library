import api from './api'
export const postsApi={
    list:({page=1,limit=10}={})=>api.get('/posts',{
        params:{_page:page,_limit:limit} }),
        get:(id)=>api.get(`/posts/${id}`),
        create:(post)=>api.post('/posts',post),
        update:(id,post)=>api.put(`/posts/${id}`,post),
        remove:(id)=>api.delete(`/posts/${id}`)
}