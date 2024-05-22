'use strict';

/**
 * nodejs-blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::nodejs-blog.nodejs-blog',({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity=await strapi.db.query('api::nodejs-blog.nodejs-blog').findOne({
        where:{
           slug:id 
        }
      });
        const sanitizedEntity= await this.sanitizeOutput(entity,ctx);

      return this.transformResponse(sanitizedEntity);
    },
  }));
