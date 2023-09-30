const dns = require('dns');
const fs = require("fs")

if (fs.existsSync("compiled/domains.txt")) fs.unlinkSync("compiled/domains.txt")
if (fs.existsSync("compiled/ips.txt")) fs.unlinkSync("compiled/ips.txt")
if (fs.existsSync("compiled/mx.txt")) fs.unlinkSync("compiled/mx.txt")
require("./headers")


fs.readFileSync("./domains.txt", "utf8").split("\n").forEach(a=>{
    
    dns.resolveMx(a.replace(/#.*/, '').trim(), function (err, addresses) {

        if (err) return
        addresses.forEach(mx=>{
            fs.appendFileSync("compiled/mx.txt", `${mx.exchange}\n`)
        })
      addresses.forEach(server=>{
        dns.resolve(server.exchange, function(err, addr){
          if (err) return
    
          fs.appendFileSync("compiled/ips.txt", `${addr[0]}\n`)
        })
      })
    }); 
});