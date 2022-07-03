/**
 * This file contains tagged template functions that can be optionally 
 * used to provide some more powerful templating capabilities while 
 * writing component markup/styles.
 * 
 * In particular, it more cleanly handles mapping over data to generate
 * markup/styles. For example...
 * 
 * html`
 *   <ul>
 *     ${data.map(item => html`<li>${item}</li>`)}
 *   </ul>
 * `
 */

export function html(strings, ...values) {
  const parts = [strings[0]];
  for (let i = 0; i < values.length; i++) {
    if (Array.isArray(values[i])) {
      for (const value of values[i]) {
        parts.push(String(value));
      }
    } else {
      parts.push(String(values[i]));
    }
    parts.push(strings[i + 1]);
  }
  return parts.join('');
}
export const css = html;