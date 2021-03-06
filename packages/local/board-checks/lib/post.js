"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
var _1 = require("./");
var async_1 = require("@quenk/preconditions/lib/async");
var record_1 = require("@quenk/preconditions/lib/async/record");
var post_1 = require("@board/validation/lib/post");
/**
 * check function for Post types.
 */
exports.check = async_1.and(async_1.async(post_1.validate), record_1.restrict({
    id: _1.inc('posts'),
    title: async_1.identity,
    description: async_1.identity,
    company: async_1.identity,
    company_email: async_1.identity,
    company_logo: async_1.identity,
    apply_url: async_1.identity,
}));
//# sourceMappingURL=post.js.map