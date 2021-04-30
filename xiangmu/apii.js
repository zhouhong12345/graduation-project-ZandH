const titbit = require('titbit');
const pg = require('pg');
const formidable = require('formidable');
const fs=require('fs')
var app = new titbit({
    //debug: true,
   daemon:true,
   //设置允许最大上传 50M
   bodyMaxSize:50000000
});
var pgdb = new pg.Pool({
    host: '127.0.0.1',
    port: 5432,
    user: 'zhouxuan',
    password: 'zxwjy1234@',
    database: 'graduation'
})
app.use(async (c, next) => {
    c.setHeader('Access-Control-Allow-Origin', '*');
    c.setHeader('Content-Type', 'application/json ')
    c.setHeader('Access-Control-Allow-Methods', [
        'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'
    ]);
    await next(c);
});
app.options('/*', async c => { });

/*
 * 这是框架本身支持的，并不是每个框架都支持，
 * 但是你可以轻松的使用中间件或是组件来实现类似的依赖注入。
 * 在请求上下文中，就可以通过c.service来访问所有在app.service上的对象或变量。
 * */
app.service.mediapath = {
    image : `${__dirname}/images`,
    audio : `${__dirname}/audios`,
    video : `${__dirname}/videos`
};







app.run(8000)


