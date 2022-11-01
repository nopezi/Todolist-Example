export const actions = {
    async getTodolist({ commit, state }, payload) {
        await this.$api
            .get(process.env.BASE_URL + 'todo-items?activity_group_id=' + payload)
            .then((response) => {
                commit('SET_DATA', response.data.data)
            })
    },
    async deleteItem({commit}, payload) {
        return await this.$api
            .delete(process.env.BASE_URL + 'todo-items/' + payload)
            
    },
    async addItem({commit}, payload) {
        return await this.$api
            .post(process.env.BASE_URL + 'todo-items', payload)
    },
    async updateItem({commit}, payload) {
        return await this.$api
            .patch(process.env.BASE_URL + 'todo-items/' + payload.id, {
                title: payload.title,
                is_active: 1,
                priority: payload.priority,
                _comment: "list of priority is : very-high, high, normal, low, very-low"
            })
    }
}

export default actions