// https://www.gatsbyjs.org/docs/unit-testing/

global.___loader = {
  enqueue: jest.fn(),
}

/**
 * jsdom doesn't support any loading or playback media operations.
 * As a workaround you can add a few stubs:
 * @see https://github.com/jsdom/jsdom/issues/2155
 */

window.HTMLMediaElement.prototype.load = () => {
  /* do nothing */
}
window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
}
window.HTMLMediaElement.prototype.pause = () => {
  /* do nothing */
}
window.HTMLMediaElement.prototype.addTextTrack = () => {
  /* do nothing */
}

/** rendering a muted video prints a warning in the console
 * workaround provided
 *  @see https://github.com/testing-library/react-testing-library/issues/470
 */

Object.defineProperty(HTMLMediaElement.prototype, "muted", {
  set: () => {},
})
