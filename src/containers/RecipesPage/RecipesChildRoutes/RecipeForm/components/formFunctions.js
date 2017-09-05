import { inputText } from './inputText';
import textarea from './textarea';

export const required = value => value ? undefined : 'Required';

export const getFormTagComponent = (tag) => {
  switch (tag) {
    case 'input':
      return inputText;
    case 'textarea':
      return textarea;
  }
};
