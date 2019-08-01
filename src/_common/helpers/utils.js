const _ = require('lodash')
const minimatch = require('minimatch')

exports.doesUrlsMatch = function (url, globes) {
    let isMatching = false
    _.each(globes, (globe) => {
        if (minimatch(url, globe)) {
            isMatching = true
            return false // stop for each
        }
    })
    return isMatching
}
