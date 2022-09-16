/*
 * @Description: 首页路由
 * @Author: 三棵杨树
 * @Date: 2022-09-16 21:28:24
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-16 21:40:52
 */

// 引入koa路由
import Router from 'koa-router';

// 实例化路由对象
const router = new Router();

// 首页路由
router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = `<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} a{color:#2E5CD5;cursor:
      pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family:
      "Century Gothic","Microsoft yahei"; color: #333;font-size:18px;} h1{ font-size: 100px; font-weight: normal;
      margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"><p>
      Hi! <br/><span style="font-size:30px">欢迎使用CMS开发框架</span></p></div> `;
});

// 导出路由
export default router;
