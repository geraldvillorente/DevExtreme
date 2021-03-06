"use strict";

var extendUtils = require("./utils/extend");
var config = {
    rtlEnabled: false,
    defaultCurrency: "USD",
    designMode: false,
    serverDecimalSeparator: ".",
    decimalSeparator: ".",
    thousandsSeparator: ",",
    forceIsoDateParsing: true,
    wrapActionsBeforeExecute: true,
    useJQuery: true
};

var configMethod = function() {
    if(!arguments.length) {
        return config;
    }

    extendUtils.extend(config, arguments[0]);
};

if(window && window.DevExpress && window.DevExpress.config) {
    configMethod(window.DevExpress.config);
}

/**
 * @name config
 * @publicName config()
 * @type method
 * @return object
 * @namespace DevExpress
 * @module core/config
 * @export default
 */
/**
 * @name config
 * @publicName config(config)
 * @param1 config:object
 * @namespace DevExpress
 * @module core/config
 * @export default
 */
module.exports = configMethod;
