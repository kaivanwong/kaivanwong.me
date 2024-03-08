---
title: "Async Component in Vue"
description: How to use async component in Vue
duration: "6min"
date: "2023-08-11"
---

When you need to load components from the server and render them, you can use `defineAsyncComponent` in Vue.

This is the sample code provided in the official [documentation](https://vuejs.org/guide/components/async.html) of Vue:

```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...load component from server
    resolve(/* loaded component */)
  })
})
// ... use `AsyncComp` like a normal component
```

In the sample code, you need to export the component in `resolve()`. But I still ran into some problems in actual development: using `resolve()` directly would fail if it was a CommonJS Component.

After testing, the following methods work and have been validated in production environments.

```js
function renderComponent(el) {
  if (!el)
    return
  return defineAsyncComponent({
    loader: () => {
      return new Promise((resolve) => {
        getComponent(el).then((Component) => {
          resolve(Component)
        })
      })
    },
  })
}
```

In this method, the component file is loaded through a url.

```js
function getComponent(el) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    let El = null
    if (!window[el.name])
      await load(/* a url of the component file */)
    El = markRaw(window[el.name])
    resolve(El?.Component)
  })
}
```

Download the component file by creating a `<script />` tag.

```js
function load(url) {
  const target = document.getElementsByTagName('script')[0] || document.head
  const script = document.createElement('script')

  script.src = url
  script.type = 'text/javascript'
  target.parentNode?.insertBefore(script, target)

  return new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
  })
}
```

Now you can render it with a built-in component called `<Suspense>`. (Learn more in the official [documentation](https://vuejs.org/guide/built-ins/suspense.html))

```html
<Suspense>
  <template #default>
    <component :is="renderComponent(/* the object information of a component */)" />
  </template>
  <template #fallback>
    Loading...
  </template>
</Suspense>
```
