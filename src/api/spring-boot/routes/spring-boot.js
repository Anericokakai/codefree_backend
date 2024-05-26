'use strict';

/**
 * spring-boot router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::spring-boot.spring-boot');
