const excludeAttributes = [
    'observedAttributes',
    'attributeChangedCallback',
    'connectedCallback',
    'disconnectedCallback',
    'adoptedCallback',
    'init'
]

function WebComponentFunction(
    name,
    options = {},
    classElement = HTMLElement,
    extendsTag
) {
    const {
        observedAttributes = Object.keys(options).filter(e => !excludeAttributes.includes(e)),
        attributeChangedCallback = function (name, oldValue, newValue) {
            if (observedAttributes.includes(name))
                options[name].call(this, newValue, oldValue)
        },
        connectedCallback = Function(),
        disconnectedCallback = Function(),
        adoptedCallback = Function(),
        init = Function(),
    } = options

    customElements.define(name, class extends classElement {
        constructor() {
            super()
            for (const key in options) {
                if (this[key] === undefined)
                    this[key] = options[key]
            }
            init.call(this, ...arguments)
        }

        static get observedAttributes() {
            return observedAttributes;
        }

        attributeChangedCallback() {
            attributeChangedCallback.call(this, ...arguments)
        }

        connectedCallback() {
            connectedCallback.call(this, ...arguments)
        }

        disconnectedCallback() {
            disconnectedCallback.call(this, ...arguments)
        }

        adoptedCallback() {
            adoptedCallback.call(this, ...arguments)
        }
    }, { extends: extendsTag })
}

export default WebComponentFunction
