export default function ({ $axios, state }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            //   common: {
            //     Accept: 'text/plain, */*',
            //   },
            // appname: 'app',
            // appkey: 'app',
            // Authorization: 'Bearer ' + localStorage.getItem('admin-token'),
            // 'Access-Control-Allow-Origin': '*',
        },
    })

    api.onError((error, redirect) => {
        //   this.$helpers.log(error)
        // const code = parseInt(error.response.status)
    })

    // Set baseURL to something different
    // api.setBaseURL('http://172.18.135.224/rba-web-api/')
    api.setBaseURL(
        process.env.BASE_URL
    )

    //   api.setHeader('appkey', 'app')
    api.setHeader('Content-Type', 'application/json')
    //   api.setHeader(
    //     'Authorization',
    //     localStorage.getItem('user-token') !== 'null'
    //       ? 'Bearer ' + localStorage.getItem('user-token')
    //       : ''
    //   )
    //   api.setToken(
    //     localStorage.getItem('user-token') !== 'null'
    //       ?  localStorage.getItem('user-token')
    //       : '',
    //     'Bearer'
    //   )

    // Inject to context as $api
    inject('api', api)
}
