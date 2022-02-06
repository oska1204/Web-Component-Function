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
    }, {},
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
            this.textContent = 'JSON\n'+text
        }
    }, {},
    HTMLPreElement,
    'pre'
)