const {expressLoader} = require('./express')

exports.loaders = ({ expressApp }) => {
    expressLoader({ app: expressApp });
}