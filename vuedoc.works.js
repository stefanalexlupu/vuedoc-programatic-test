const vuedoc = require('@vuedoc/md')
const options = {
  filename: 'src/components/HelloWorld.vue'
}

vuedoc.md(options)
  .then(document => console.log(document))
  .catch(error => console.error(error))
