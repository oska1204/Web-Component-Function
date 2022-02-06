function WebComponentFunction(name,
    options = {},
    prototype = {},
    classElement = HTMLElement,
    extendsTag
) {
    const {
        observedAttributes = Object.keys(options)
    } = prototype
    const {
        attributeChangedCallback = function (name, oldValue, newValue) {
            if (observedAttributes.includes(name))
                options[name].call(this, newValue, oldValue)
        }
    } = prototype

    customElements.define(name, class extends classElement {
        constructor() {
            super()
            for (const key in options) {
                if (this[key] !== undefined)
                    return
                this[key] = options[key]
            }
        }

        static get observedAttributes() {
            return observedAttributes;
        }

        attributeChangedCallback() {
            attributeChangedCallback.call(this, ...arguments)
        }
    }, { extends: extendsTag })
}

export default WebComponentFunction
