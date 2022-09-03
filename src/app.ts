/*
 * @Description: 项目入口文件
 * @Author: 三棵杨树
 * @Date: 2022-09-02 21:02:55
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-03 18:28:06
 */

import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';
import InitManger from './middlewares/router';
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

// 路由自动加载
InitManger.InitCore(app);

module.exports = app;
