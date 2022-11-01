<template>
  <div>
    <Navbar />
    <Home />
  </div>
</template>

<script>

import Home from './home.vue'

export default {
  components: {
    Home,
  },
  head() {
    return {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
      ],
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
          rel: 'stylesheet',
          integrity:
            'sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi',
          crossorigin: 'anonymous',
        },
        {
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css',
          rel: 'stylesheet',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3',
          crossorigin: 'anonymous',
        },
      ],
    }
  },
}
</script>

<style>
body {
  background: #e5e5e5;
  font-family: "Poppins",sans-serif;
}
</style>