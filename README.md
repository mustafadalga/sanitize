
# Vue 3 Sanitize Input Plugin

* This is a Vue 3 directive for sanitizing input fields using DOMPurify.

<p align="center">

[![vue version](https://img.shields.io/npm/v/sanitize.svg)](https://www.npmjs.com/package/v-sanitize-directive)
[![vue version](https://img.shields.io/badge/vue-3.2-brightgreen.svg)](https://www.npmjs.com/package/v-sanitize-directive)

</p>

## Installing

### Package manager

Using npm:

```bash
npm i v-sanitize-directive
```

Then, import and register the component:


## Global Registration
*In your main.js or main.ts file, globally register the plugin:*


main.js
```
import { sanitizePlugin } from "v-sanitize-directive";
app.use(sanitizePlugin);
```

## Local Registration

* Composition API

```
<script lang="ts"  setup>
import { sanitize as vSanitize } from "v-sanitize-directive";
</script>
```

* Options API
```
<script>
import { sanitize } from "v-sanitize-directive";

export default {
  directives: {
    "sanitize": sanitize
  },
}
</script>
```


## Usage
* Example 1: Options API - In your component.
```
<script>
import { sanitize } from "v-sanitize-directive";

export default {
  directives: {
    "sanitize": sanitize
  },
  data () {
    return {
       text: ""
    }
  }
}
</script>

<template>
      <input v-sanitize="text"
             v-model="text"
              type="text" />
</template>
```

* Example 2: Composition API - In your component.
```
<script setup>
import { sanitize as vSanitize } from "v-sanitize-directive";
import { ref } from "vue";
const text = ref("");
</script>

<template>
      <input v-sanitize="text"
             v-model="text"
              type="text" />
</template>
```

* Example 3: Global Registration with Composition API.After globally registering the plugin, in your component.
```
<script lang="ts"  setup>
import { ref } from "vue";
const text = ref("");
</script>

<template>
      <input v-sanitize="text"
             v-model="text"
              type="text" />
</template>
```

* Example 4: Global Registration with Options API.After globally registering the plugin, in your component.

```
<script lang="ts" >
export default {
  data() {
    return {
      text: ""
    }
  }
}
</script>

<template>
      <input v-sanitize="text"
             v-model="text"
              type="text" />
</template>
```

## Demo
* https://sanitize-input.netlify.app/

## License
[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/sanitize/blob/main/LICENSE)