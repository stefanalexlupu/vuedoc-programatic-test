const vuedoc = require('@vuedoc/md')
const options = {
  filenames: [
    'src/components/HelloWorld.vue'
  ]
}

vuedoc.md(options)
  .then(document => console.log(document))
  .catch(error => console.error(error))
