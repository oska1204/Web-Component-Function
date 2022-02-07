# Web Component Function

Simplifies creating Web Components, and reduces the code and complexsetity of creating one.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for information about Web Components.

## Functionality
See the example folder to get a sense of how it works.
```js
WebComponentFunction(
    // * The name of the component: <tag->, must include "-".
    'tag-',
    {
        // * Pass in the functionality here
        constructor() { 
            this.textContent = 'hi'
        },
        connectedCallback() {
            console.log(this.isConnected)
        }
    },
    // HTMLElement,
    // null
)
```
The last two parameters are not needed.
See example directory for a demonstration & [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for understanding.

Tip: avoid arrow functions for `this` to refer to the element, in this case `<tag->`.

## Options
### `constructor()`
The constructor function runs when the constructor gets called.
