const ENG_LAYOUT = [{
        small: '`',
        shift: '~',
        code: 'Backquote',
    },
    {
        small: '1',
        shift: '!',
        code: 'Digit1',
    },
    {
        small: '2',
        shift: '@',
        code: 'Digit2',
    },
    {
        small: '3',
        shift: '#',
        code: 'Digit3',
    },
    {
        small: '4',
        shift: '$',
        code: 'Digit4',
    },
    {
        small: '5',
        shift: '%',
        code: 'Digit5',
    },
    {
        small: '6',
        shift: '^',
        code: 'Digit6',
    },
    {
        small: '7',
        shift: '&',
        code: 'Digit7',
    },
    {
        small: '8',
        shift: '*',
        code: 'Digit8',
    },
    {
        small: '9',
        shift: '(',
        code: 'Digit9',
    },
    {
        small: '0',
        shift: ')',
        code: 'Digit0',
    },
    {
        small: '-',
        shift: '_',
        code: 'Minus',
    },
    {
        small: '=',
        shift: '+',
        code: 'Equal',
    },
    {
        small: 'Backspace',
        shift: null,
        code: 'Backspace',
    },
    {
        small: 'Delete',
        shift: null,
        code: 'Delete',
    },
    {
        small: 'Tab',
        shift: null,
        code: 'Tab',
    },
    {
        small: 'q',
        shift: 'Q',
        code: 'KeyQ',
    },
    {
        small: 'w',
        shift: 'W',
        code: 'KeyW',
    },
    {
        small: 'e',
        shift: 'E',
        code: 'KeyE',
    },
    {
        small: 'r',
        shift: 'R',
        code: 'KeyR',
    },
    {
        small: 't',
        shift: 'T',
        code: 'KeyT',
    },
    {
        small: 'y',
        shift: 'Y',
        code: 'KeyY',
    },
    {
        small: 'u',
        shift: 'U',
        code: 'KeyU',
    },
    {
        small: 'i',
        shift: 'I',
        code: 'KeyI',
    },
    {
        small: 'o',
        shift: 'O',
        code: 'KeyO',
    },
    {
        small: 'p',
        shift: 'P',
        code: 'KeyP',
    },
    {
        small: '[',
        shift: '{',
        code: 'BracketLeft',
    },
    {
        small: ']',
        shift: '}',
        code: 'BracketRight',
    },
    {
        small: 'Enter',
        shift: null,
        code: 'Enter',
    },
    {
        small: 'CapsLock',
        shift: null,
        code: 'CapsLock',
    },
    {
        small: 'a',
        shift: 'A',
        code: 'KeyA',
    },
    {
        small: 's',
        shift: 'S',
        code: 'KeyS',
    },
    {
        small: 'd',
        shift: 'D',
        code: 'KeyD',
    },
    {
        small: 'f',
        shift: 'F',
        code: 'KeyF',
    },
    {
        small: 'g',
        shift: 'G',
        code: 'KeyG',
    },
    {
        small: 'h',
        shift: 'H',
        code: 'KeyH',
    },
    {
        small: 'j',
        shift: 'J',
        code: 'KeyJ',
    },
    {
        small: 'k',
        shift: 'K',
        code: 'KeyK',
    },
    {
        small: 'l',
        shift: 'L',
        code: 'KeyL',
    },
    {
        small: ';',
        shift: ':',
        code: 'Semicolon',
    },
    {
        small: "'",
        shift: '"',
        code: 'Quote',
    },
    {
        small: '\\',
        shift: '|',
        code: 'Backslash',
    },
    {
        small: 'Shift',
        shift: null,
        code: 'ShiftLeft',
    },
    {
        small: '<',
        shift: '>',
        code: 'IntlBackslash',
    },
    {
        small: 'z',
        shift: 'Z',
        code: 'KeyZ',
    },
    {
        small: 'x',
        shift: 'X',
        code: 'KeyX',
    },
    {
        small: 'c',
        shift: 'C',
        code: 'KeyC',
    },
    {
        small: 'v',
        shift: 'V',
        code: 'KeyV',
    },
    {
        small: 'b',
        shift: 'B',
        code: 'KeyB',
    },
    {
        small: 'n',
        shift: 'N',
        code: 'KeyN',
    },
    {
        small: 'm',
        shift: 'M',
        code: 'KeyM',
    },
    {
        small: ',',
        shift: '<',
        code: 'Comma',
    },
    {
        small: '.',
        shift: '>',
        code: 'Period',
    },
    {
        small: '/',
        shift: '?',
        code: 'Slash',
    },
    {
        small: 'Shift',
        shift: null,
        code: 'ShiftRight',
    },
    {
        small: 'Ctrl',
        shift: null,
        code: 'ControlLeft',
    },
    {
        small: 'Alt',
        shift: null,
        code: 'AltLeft',
    },
    {
        small: ' ',
        shift: null,
        code: 'Space',
    },
    {
        small: 'Alt',
        shift: null,
        code: 'AltRight',
    },
    {
        small: 'Ctrl',
        shift: null,
        code: 'ControlRight',
    },
    {
        small: '&larr;',
        shift: null,
        code: 'ArrowLeft',
    },
    {
        small: '&uarr;',
        shift: null,
        code: 'ArrowUp',
    },
    {
        small: '&darr;',
        shift: null,
        code: 'ArrowDown',
    },
    {
        small: '&rarr;',
        shift: null,
        code: 'ArrowRight',
    },
    {
        small: 'Win',
        shift: null,
        code: 'Win',
    },
];

class Keyboard {
    constructor(layout) {
        this.layout = layout;
        this.isCaps = false;
    }

    addKeyboard() {
        const Keyboard_Wrapper = document.createElement("div");
        Keyboard_Wrapper.classList.add("keyboard-wrapper");
        document.body.appendChild(Keyboard_Wrapper);
        this.layout.forEach((key, index) => {
            let newElement = document.createElement("div");
            newElement.classList.add("keyboard__key");
            newElement.classList.add(`keyboard__key_${key.code}`);
            newElement.innerHTML = `<div class="eng"><div class="caseDown">${key.small}</div><div class="caseUp key_hide">${key.shift}</div></div>`;
            Keyboard_Wrapper.appendChild(newElement);
            //--------------------Click-event
            newElement.addEventListener('click', function() {
                console.log(key.small);
                let pressedButton = document.querySelector(`.keyboard__key_${key.code}`);
                pressedButton.classList.add("keyboard__key_click");
                pressedButton.addEventListener("animationend", (animationEvent) => {
                    pressedButton.classList.remove("keyboard__key_click");
                });
                // addAnimation("click");
            });
        });

        //------------------Keydown-event
        let currentLayout = this.layout; //!!!!
        document.addEventListener('keydown', function(event) {
            // console.log(this.layout);//!!!!
            currentLayout.forEach((key, index) => {
                if (event.code == key.code) {

                    pressedButtonViewer[key.code] = true;

                    console.log(key.small);
                    let pressedButton = document.querySelector(`.keyboard__key_${key.code}`);
                    pressedButton.classList.add("keyboard__key_tap");
                    document.addEventListener('keyup', function(event) {
                        pressedButton.classList.remove("keyboard__key_tap");

                        pressedButtonViewer[key.code] = false;
                    });
                    // addAnimation("keydown");

                    //----------------------Change_Language_Combination
                    if ((pressedButtonViewer['ControlLeft']) && (pressedButtonViewer['AltLeft'])) {
                        console.log("BINGO!!!!");
                    }
                };
            });
        });

        // function addAnimation(typeEvent) {
        //     if (typeEvent = "click") {
        //         pressedButton.classList.add("keyboard__key_click");
        //         pressedButton.addEventListener("animationend", (animationEvent) => {
        //             pressedButton.classList.remove("keyboard__key_click");
        //         });
        //     }
        //     if (typeEvent = "keydown") {
        //         pressedButton.classList.add("keyboard__key_tap");
        //         document.addEventListener('keyup', function(event) {
        //             pressedButton.classList.remove("keyboard__key_tap");
        //         });
        //     }
        // }
    };
};
let pressedButtonViewer = {};
let my_keyboard = new Keyboard(ENG_LAYOUT);

document.body.onload = my_keyboard.addKeyboard();