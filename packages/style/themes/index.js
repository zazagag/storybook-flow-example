/**
 *
 * @param options:
 *    theme_vars - path to a custom vars.css
 */

/**
 * postCssResolverFactory
 * @param {Object} map map
 * @returns {Function}
 */
function postCssResolverFactory(map = {}) {
  return function resolve(pathToResolve) {
    const path = map[pathToResolve]
    return path || pathToResolve
  }
}

const postCssResolver = postCssResolverFactory({})

module.exports.postCssResolverFactory = postCssResolverFactory
module.exports.postCssResolver = postCssResolver
