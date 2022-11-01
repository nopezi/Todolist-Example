export const mutations = {
    SET_DATA_ACTIVITY(state, payload) {
        state.activity = []
        if (payload) {
            payload.forEach((row, i) => {
                state.activity.push(row)
            });
        }
    },
}

export default mutations