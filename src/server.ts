/*
 * @Description: 服务启动文件
 * @Author: 三棵杨树
 * @Date: 2022-10-23 13:34:52
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-10-23 13:45:17
 */

/**
 * 导入模块
 */
import app from '../src/app';
import http from 'http';
import os from 'os';
import chalk from 'chalk';
import { PORT } from '../src/config';

/**
 * 创建 HTTP 服务
 */
const server = http.createServer(app.callback());

/**
 * 监听网络接口上提供的端口
 */
server.listen(PORT);
server.on('listening', onListening);

/**
 * 获取本地的ip地址
 * @returns 本地的ip地址
 */
function getIPAdress() {
  // os.networkInterfaces()方法返回被赋予网络地址的网络接口
  const interfaces = os.networkInterfaces();

  /*
     address: 被赋予的IPv4 or IPv6
     netmask: IPv4 or IPv6 子网掩码
     family: IPv4 or IPv6
     mac: 网络接口的MAC地址
     internal: 如果网络接口是loopback或相似的远程不能用的接口时 值true 否则值为false
     scopeid: IPv6数字领域识别码（family为IPv6才可用）
     cidr: 以CIDR表示法分配的带有路由前缀的IPv4或IPv6地址，如果netmask参数不可用 该属性为null
   */
  for (const devName in interfaces) {
    const iface = interfaces[devName] as os.NetworkInterfaceInfo[];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }

  return '192.168.0.0';
}

/**
 * 侦听 HTTP服务器
 */
function onListening() {
  const myHost = getIPAdress();
  const Local = `http://localhost:${PORT}`; // 本地地址
  const Network = `http://${myHost}:${PORT}`; // 本地ip网络地址
  console.log('server run at');
  console.log(`   - Local:   ${chalk.blue(Local)}`);
  console.log(`   - Network: ${chalk.blue(Network)}`);
}
