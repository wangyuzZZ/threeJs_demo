import {
    login
} from '@/api/login'
import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'
const user = {
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    actions: {
        //登录
        Login({
            commit
        }, id) {
            return new Promise((resolve, reject) => {
                login(id)
                    .then((res) => {
                        if (res.code === 200) {
                            setToken(res.msg)
                            commit('SET_TOKEN', res.msg)
                            resolve()
                        }
                    })
                    .catch((error) => {
                        reject(error)
                    });
            })
        },
        // 前端 登出
        FedLogOut({
            commit
        }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}
export default user