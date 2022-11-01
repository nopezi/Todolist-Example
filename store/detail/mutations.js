export const mutations = {
    SET_DATA(state, payload) {
        state.to_do_ist = []
        if (payload) {
            payload.forEach((row, i) => {
                state.to_do_ist.push(row)
            });
        }
    },
}

export default mutations