/*
 * @Description: 日志中间件
 * @Author: 三棵杨树
 * @Date: 2022-09-03 15:03:55
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-03 17:04:24
 */

import fs from 'fs';
import path from 'path';
import log4js from 'log4js'; // 文档 https://log4js-node.github.io/log4js-node/
import { Context, Next } from 'koa';
import { LOGPATH } from '../config';

// 判断是否有logs目录，没有就新建，用来存放日志
const logsDir = path.parse(LOGPATH).dir;
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// 配置log4.js
log4js.configure({
  appenders: {
    // 定义输出程序
    console: { type: 'console' },
    dateFile: { type: 'dateFile', filename: LOGPATH, pattern: '-yyyy-MM-dd' },
  },
  categories: {
    // 定义日志类别及使用的输出程序
    default: {
      appenders: ['console', 'dateFile'],
      level: 'info',
    },
  },
});

const logger = log4js.getLogger('[Default]');

/**
 * @description: logger中间件
 * @param {Context} ctx  ctx上下文
 * @param {Next} next  next执行下一步函数
 */
const loggerMiddleware = async (ctx: Context, next: Next) => {
  // 请求开始时间
  const start = new Date().getTime();
  await next();
  // 结束时间
  const end = new Date().getTime() - start;
  // 打印出请求相关参数
  const logText = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(
    ctx.request.body
  )} 响应参数： ${JSON.stringify(ctx.body)} - ${end}ms`;
  logger.info(logText);
};

export { logger, loggerMiddleware };
