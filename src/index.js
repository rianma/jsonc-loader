import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import stripJsonComments from 'strip-json-comments';

import schema from './options.json'

export const raw = true;

export default function loader(source) {
  const { version, webpack } = this

  const options = getOptions(this) || {}

  // Validate Options
  validateOptions(schema, options, 'JSON-C Loader');

  const rawSource = source.toString()

  const striped = stripJsonComments(rawSource)

  let output = striped
  if (options.minify) {
    output = JSON.stringify(JSON.parse(striped))
  }

  return `
/**
 * Loader API Version: ${version}
 * Is this in "webpack mode": ${webpack}
 */
export default ${output}`
}
