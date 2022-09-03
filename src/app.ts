/*
 * @Description: 项目入口文件
 * @Author: 三棵杨树
 * @Date: 2022-09-02 21:02:55
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-03 17:09:23
 */

import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';
import { loggerMiddleware } from './middlewares/logger';

const app = new Koa();

// 日志中间件
app.use(loggerMiddleware);

// 处理post请求参数
app.use(
  KoaBodyParser({
    enableTypes: ['json', 'form', 'text'],
  })
);

module.exports = app;
