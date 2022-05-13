import config from "layout.json";

const RUS_LAYOUT = config.RU;
const ENG_LAYOUT = config.EN;

class Keyboard {
    constructor(layout = ENG_LAYOUT) {
        this.layout = layout;
        this.isCaps = false;
        this.pressedButtonsBuffer = {};
    }

    changeLanguage() {
        if (this.layout === ENG_LAYOUT) {
            this.layout = RUS_LAYOUT;
        } else {
            this.layout = ENG_LAYOUT;
        }
        this.addKeyboard();
    }

    addKeyboard() {
        document.body.innerHTML = '';

        const textArea = document.createElement("div");
        textArea.classList.add("text-area-wrapper");
        document.body.appendChild(textArea);

        textArea.innerHTML = `<textarea name= "textarea" rows = "10" cols = "50" > Write something here </textarea>`;

        const Keyboard_Wrapper = document.createElement("div");
        Keyboard_Wrapper.classList.add("keyboard-wrapper");
        document.body.appendChild(Keyboard_Wrapper);

        this.layout.forEach((key, index) => {
            const newElement = document.createElement("button");
            newElement.classList.add("keyboard__key");
            newElement.classList.add(`keyboard__key_${key.code}`);
            newElement.innerHTML = `<div class="caseDown">${key.small}</div>
                                    <div class="caseUp key_hide">${(key.shift)||(key.small)}</div>`;
            Keyboard_Wrapper.appendChild(newElement);
            this.layout[key].element = newElement; //!!!!!!

            //--------------------Click-event
            newElement.addEventListener('click', () => {

                if (this.isCaps === false) this.typeInTextArea(key.code, key.small);
                if (this.isCaps === true) this.typeInTextArea(key.code, key.shift);

                // const pressedButton = document.querySelector(`.keyboard__key_${key.code}`);

                newElement.classList.add("keyboard__key_click");
                newElement.addEventListener("animationend", () => {
                    newElement.classList.remove("keyboard__key_click");
                });
            });
        });

        //------------------Keydown-event
        document.addEventListener('keydown', (event) => {
            this.layout.forEach((key, index) => {
                if (event.code == key.code) {
                    this.pressedButtonsBuffer[key.code] = true;
                    // console.log(key.small);
                    let pressedButton = document.querySelector(`.keyboard__key_${key.code}`);
                    pressedButton.classList.add("keyboard__key_tap");
                };
            });
        });

        document.addEventListener('keyup', () => {
            pressedButton.classList.remove("keyboard__key_tap");
            delete this.pressedButtonsBuffer[key.code];
        });

        addEventListener("keydown", () => {
            //----------------------Change_Language_Combination
            if ((this.pressedButtonsBuffer['ControlLeft']) && (this.pressedButtonsBuffer['AltLeft'])) {
                delete this.pressedButtonsBuffer['ControlLeft'];
                delete this.pressedButtonsBuffer['AltLeft'];
                this.changeLanguage();
            }
            //----------------------Uppercase_Combination
            if ((this.pressedButtonsBuffer['ShiftLeft']) || (this.pressedButtonsBuffer['ShiftRight'])) {
                this.changeCase();
            }
            if (this.pressedButtonsBuffer['CapsLock']) {
                delete this.pressedButtonsBuffer['CapsLock'];
                this.changeCase(true);
            }
        });

        document.querySelector(".keyboard__key_CapsLock").addEventListener('click', () => {
            //----------------------Uppercase_Combination
            this.changeCase(true);
        });

        const MESSAGE = document.createElement("div");
        MESSAGE.classList.add("message");
        document.body.appendChild(MESSAGE);
        MESSAGE.innerHTML = `<div>Ctrl+Alt  -  Change language</div><div>"Shift" works bad. I'll try to fix it...</div>`;
    };

    changeCase(isCaps) {
        if (isCaps) {
            if (this.isCaps === false) {
                this.layout.forEach((key, index) => {
                    let keyboardButton = document.querySelector(`.keyboard__key_${key.code}`);
                    keyboardButton.firstChild.classList.add("key_hide");
                    keyboardButton.firstChild.nextSibling.classList.remove("key_hide");
                    this.isCaps = true;
                });
            } else {
                this.layout.forEach((key, index) => {
                    let keyboardButton = document.querySelector(`.keyboard__key_${key.code}`);
                    keyboardButton.firstChild.classList.remove("key_hide");
                    keyboardButton.firstChild.nextSibling.classList.add("key_hide");
                    this.isCaps = false;
                });
            }
        } else {
            this.layout.forEach((key, index) => {
                let keyboardButton = document.querySelector(`.keyboard__key_${key.code}`);
                keyboardButton.firstChild.classList.add("key_hide");
                keyboardButton.firstChild.nextSibling.classList.remove("key_hide");
            });
            this.isCaps = true; //delete?
            addEventListener('keyup', (event) => {
                if ((this.pressedButtonsBuffer['ShiftLeft']) || (this.pressedButtonsBuffer['ShiftRight'])) {
                    delete this.pressedButtonsBuffer['ShiftLeft'];
                    delete this.pressedButtonsBuffer['ShiftRight'];
                    this.layout.forEach((key, index) => {
                        let keyboardButton = document.querySelector(`.keyboard__key_${key.code}`);
                        keyboardButton.firstChild.classList.remove("key_hide");
                        keyboardButton.firstChild.nextSibling.classList.add("key_hide");
                    });
                    this.isCaps = false; //delete?
                }
            });
        }
    };

    typeInTextArea(inputButton, symbol) {
        const textArea = document.querySelector("textarea");
        let cursorPos = textArea.selectionStart;
        const left = textArea.value.slice(0, cursorPos);
        const right = textArea.value.slice(cursorPos);
        const inputType = {
            Tab: () => {
                textArea.value = `${left}\t${right}`;
                cursorPos += 1;
            },
            ArrowLeft: () => {
                cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
            },
            ArrowRight: () => {
                cursorPos += 1;
            },
            ArrowUp: () => {
                const positionFromLeft = textArea.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [
                    [1]
                ];
                cursorPos -= positionFromLeft[0].length;
            },
            ArrowDown: () => {
                const positionFromLeft = textArea.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [
                    [1]
                ];
                cursorPos += positionFromLeft[0].length;
            },
            Enter: () => {
                textArea.value = `${left}\n${right}`;
                cursorPos += 1;
            },
            Delete: () => {
                textArea.value = `${left}${right.slice(1)}`;
            },
            Backspace: () => {
                textArea.value = `${left.slice(0, -1)}${right}`;
                cursorPos -= 1;
            },
            Space: () => {
                textArea.value = `${left} ${right}`;
                cursorPos += 1;
            },
        }
        if (inputType[inputButton]) {
            inputType[inputButton]();
        } else if ((inputButton !== "ShiftLeft") && (inputButton !== "ShiftRight") && (inputButton !== "AltLeft") && (inputButton !== "AltRight") && (inputButton !== "ControlLeft") && (inputButton !== "ControlRight") && (inputButton !== "Win") && (inputButton !== "CapsLock")) { //!!!iNDEXoF
            cursorPos += 1;
            textArea.value = `${left}${symbol || ''}${right}`;
        }
        textArea.setSelectionRange(cursorPos, cursorPos);
    }
};

const myKeyboard = new Keyboard();

document.body.onload = myKeyboard.addKeyboard();