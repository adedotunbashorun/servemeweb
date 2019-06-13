export default function ({ store, redirect }) {
    if ((store.state.auth.token == '' || typeof store.state.auth.token == 'undefined') || store.getters.authUser.user_type !="admin") {
        return redirect('/login')
    }
}
