'use strict';

/**
 * groomer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::groomer.groomer');
