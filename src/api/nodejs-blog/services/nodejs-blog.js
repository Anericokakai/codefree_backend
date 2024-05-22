'use strict';

/**
 * nodejs-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nodejs-blog.nodejs-blog');
