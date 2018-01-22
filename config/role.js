module.exports = function (app) {
    app.role.use('admin', ctx => {
        return ctx.user && ctx.user.isAdmin;
    });

    app.role.use('can write', async ctx => {
        const post = await ctx.service.post.fetch(ctx.request.body.id);
        return ctx.user.name === post.author;
    });
};