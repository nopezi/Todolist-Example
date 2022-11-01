export const actions = {
    async getActivity({ commit, state }) {
        await this.$api
            .get(process.env.BASE_URL + 'activity-groups?email=snopezi@gmail.com')
            .then((response) => {
                commit('SET_DATA_ACTIVITY', response.data.data)
            })
    },
    async addActivity({ commit }) {
        return await this.$api
            .post(process.env.BASE_URL + 'activity-groups', {
                title: "New Activity",
                "email": "snopezi@gmail.com",
            })
    },
    async deleteActivity({commit}, payload) {
        return await this.$api
                    .delete(process.env.BASE_URL + 'activity-groups/' + payload)
    }
}

export default actions