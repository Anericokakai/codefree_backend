'use strict';

/**
 * spring-boot controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::spring-boot.spring-boot',({strapi})=>({
    async findOne(ctx){
        const {id}=ctx.params;
        const entity= await strapi.db.query('api::spring-boot.spring-boot').findOne({
            where:{
                slug:id
            }
        })
        const sanitizedEntity= await this.sanitizeOutput(entity,ctx);

     return this.transformResponse(sanitizedEntity);
    }
}));


