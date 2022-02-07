import fn from '../web-component-function.js';

fn('test-',
    {
        text(text) {
            this.textContent = text
        }
    }
)

fn('test-2',
    {
        text(text) {
            this.textContent = text
        }
    },
    HTMLParagraphElement,
    'p'
)

fn('test-final',
    {
        style(text) {
            this.textContent = text
        }
    }
)

fn('test-2-final',
    {
        json(text) {
            this.textContent = 'JSON\n' + text
        }
    },
    HTMLPreElement,
    'pre'
)

fn('json-',
    {
        json(text) {
            const json = JSON.parse(text)
            const entries = Object.entries(json)
            const headings = Object.entries(this.elms)
            headings.forEach((e, i) => {
                const elm = e[1]
                elm.insertAdjacentText('afterbegin', entries[i][0] + ': ')
                elm.firstElementChild.textContent = entries[i][1]
            })
        },
        init() {
            this.innerHTML = `
                <h1><span></span></h1>
                <h2><span></span></h2>
                <h3><span></span></h3>
            `
            this.elms = {
                h1: this.querySelector('h1'),
                h2: this.querySelector('h2'),
                h3: this.querySelector('h3'),
            }
        }
    }
)
