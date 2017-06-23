import { b } from './b';

export const a = {
  msg: 'a',

  init() {
    console.log(b);
    // Commenting out the line below stops the error
    console.log(global);
  }
};
