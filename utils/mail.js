/**
 * qq留言回复功能
 */

// 引入数据库相关
const query = require('../mysql/index')
const nodemailer = require('nodemailer')
let smtpTransport = require('nodemailer-smtp-transport');

smtpTransport = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: '2603029264@qq.com',//自己的QQ邮箱地址
        pass: 'xztzrsvpnmgtdieg'//使用自己的QQ邮箱申请一个，下边会有详细讲解
    }
});

/**
 * @param {Number} userId 留言的id
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
const sendMail = async function(userId, recipient, subject, html) {
  if(userId === 0 || recipient !== '2603029264@qq.com') return
  const sql = `select qq, parent_id FROM parent where id = ${userId} `
  const data = await query(sql)
  const {qq, parent_id} = data[0]
  let reg = /[\d\w]+\b@[a-zA-ZA-z0-9]+\.[a-z]+/g;
  const toUser = qq.match(reg)
    smtpTransport.sendMail({
        from: recipient,
        to: toUser[0],
        subject: subject,
        html: html

    }, function(error, response) {
        if (error) {
            console.log(error);
        }
        console.log(response,'发送成功')
    });
}
module.exports = {
  sendMail
}
//参数：
// 用户的的ID
//1.接收邮件的邮箱地址
//2.邮件的标题
//3.邮箱内容
