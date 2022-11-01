<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
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
        {
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/css/bootstrap-select.min.css',
          rel: 'stylesheet',
        },
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js',
        },
      ],
    }
  },
}


</script>

<style>
body {
  background-color: #f4f4f4;
  font-family: 'Poppins', sans-serif;
}
</style>