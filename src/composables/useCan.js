import {useAuthStore} from '@/stores/auth'
const permissions={
    admin:['delete-user','view-billing','edit-settings'],
    user:['view-profile','edit-profile']
}
export function useCan(){
    const auth=useAuthStore()
    return (perm)=>permissions[auth.user?.role]?.includes(perm)??false
}