/* eslint-disable no-param-reassign */
import { remark } from 'remark';
import remarkHTML from 'remark-html';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

const markdownPreface = 'md//';

const recursiveMarkdownRender = (obj) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      const value = obj[property];

      if (isObject(value)) {
        obj[property] = recursiveMarkdownRender(value);
      } else if (isString(value) && value.startsWith(markdownPreface)) {
        // value must be a string and not start with a period (look like a path)
        const html = remark()
          .use(remarkHTML)
          .processSync(value.split(markdownPreface).join(''))
          .toString();

        obj[property] = html;
      }
    }
  }

  return obj;
};

export { recursiveMarkdownRender };
