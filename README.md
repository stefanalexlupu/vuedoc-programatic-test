# vuedoc-test

## Project setup
```
npm install
```

## Run with CLI to see expected result
```
npx vuedoc.md src/components/HelloWorld.vue
```

Will correctly print to console:

```
# HelloWorld

## Props

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| `msg` | `String` | &nbsp;      |
```

## Run programatically and get error
```
node vuedoc.js
```

Will print the following to the console:

```
Error: One of options.filename or options.filecontent is required
    at Object.module.exports.parseOptions (/Users/work/Documents/projects/vuedoc-test/node_modules/@vuedoc/parser/index.js:31:11)
    at Object.module.exports.parse (/Users/work/Documents/projects/vuedoc-test/node_modules/@vuedoc/parser/index.js:72:42)
    at validator.then.then (/Users/work/Documents/projects/vuedoc-test/node_modules/@vuedoc/md/index.js:50:18)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:744:11)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
```

Expected results: same as using CLI
