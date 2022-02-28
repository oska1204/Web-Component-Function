const excludeAttributes = [
    'adoptedCallback',
    'attributeChangedCallback',
    'connectedCallback',
    'constructor',
    'disconnectedCallback',
    'observedAttributes',
]

function WebComponentFunction(
    name,
    prototype = {},
    classElement = HTMLElement,
    extendsTag
) {
    const {
        constructor = Function(),
        observedAttributes = Object.keys(prototype)
            .filter(key => !excludeAttributes.includes(key)),
    } = prototype

    const cls = class extends classElement {
        constructor() {
            super()
            constructor.call(this, ...arguments)
        }

        static get observedAttributes() {
            return observedAttributes;
        }

        attributeChangedCallback(name, oldValue, newValue) {
            prototype[name].call(this, newValue, oldValue)
        }
    }

    const keys = Object.keys(classElement.prototype)
    for (const key in prototype) {
        if (!keys.includes(key)) {
            cls.prototype[key] = prototype[key]
        }
    }

    customElements.define(name, cls, { extends: extendsTag })

    return cls
}

try {
    module.exports = { WebComponentFunction }
} catch (error) {
}
