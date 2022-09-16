/*
 * @Description: 路由自动加载中间件
 * @Author: 三棵杨树
 * @Date: 2022-09-03 17:46:22
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-16 21:35:29
 */

import Koa from 'koa';
import requireDirectory from 'require-directory';
import Router from 'koa-router';

class InitManger {
  static app: Koa;

  // 入口方法
  static InitCore(app: Koa) {
    // 接收传过来的Koa实例
    InitManger.app = app;
    // 调用封装了动态加载路由的函数
    // 静态方法只能通过类名调用
    InitManger.InitLoadRouters();
  }

  // 封装动态加载路由的函数
  static InitLoadRouters() {
    // 在node.js中process.cwd()方法可以获取项目的根路径
    const Url = `${process.cwd()}/src/api`;

    /**
     * 参数：第一个参数固定参数module
     * 第二个参数 Url 要加载的模块的文件路径
     * 第三个参数：extensions 要加载的文件类型，visit 每加载一个参数执行的函数
     */
    requireDirectory(module, Url, {
      extensions: ['ts'],
      visit: (obj: Router) => {
        /**
         * 由于路由文件导出方式为es6的导出，与module.exports导出的文件格式不同
         * 所以需要循环遍历该对象，取出正确的值
         */
        for (const key in obj) {
          // 如果是路由就进行注册
          if (obj[key] instanceof Router) {
            InitManger.app.use(obj[key].routes());
          }
        }
      },
    });
  }
}

export default InitManger;
