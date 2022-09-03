/*
 * @Description: 常量集合-此集合里的配置均为示例，可自行修改
 * @Author: 三棵杨树
 * @Date: 2022-09-02 22:17:16
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-03 15:44:11
 */

import path from 'path';

/**
 * 服务端口号
 */
const PORT = '3000';

/**
 * jwt密匙
 */
const SECRET = 'Tara$0729_Queens';

/**
 * md5加密密钥
 */
const CRYPTO_SECRET_KEY = 'Hyominn00$Tara';

/**
 * 日志文件路径
 */
const LOGPATH = path.resolve(__dirname, './logs/koa-template.log');

export { PORT, SECRET, CRYPTO_SECRET_KEY, LOGPATH };
