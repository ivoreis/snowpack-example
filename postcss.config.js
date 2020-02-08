module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    !ctx.options.map ? require('cssnano') : null,
  ],
})