import {Button} from './button.js';

const text = 'Label';
const sizes = ['s', 'm', 'l'];
const variants = ['primary', 'secondary', 'danger'];
const modifiers = ['transparent', 'borderless'];

const buttons = [];

for (let i = 0; i < sizes.length; i++) {
  const size = sizes[i];

  for (let j = 0; j < variants.length; j++) {
    const variant = variants[j];

    for (let k = 0; k <= modifiers.length; k++) {
      const modifier  = modifiers[k];
      
      buttons.push(new Button(text, {size, variant, modifier }))
    }
  }
}

document.body.append(...buttons.map(btn => btn.render()))

