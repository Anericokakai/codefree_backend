'use strict';

/**
 * spring-boot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spring-boot.spring-boot');
