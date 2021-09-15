import faker from 'faker'
import fs from "fs"
function generateUsers(){
    let user = []
    let address = []
    faker.setLocale('zh_CN')
    for(let i=1;i<=50;i++){
        //相当于一张用户表
       user.push({
           "id": i,
           "name": faker.name.firstName()+faker.name.lastName(),
           "jobtitle": faker.name.jobTitle(),
           "email": faker.internet.email()
       })
        address.push({
            "id":i,
            "city": faker.address.city(),
            "streetname":faker.address.streetName()
        })
    }
    return {"user":user,"address":address}
}
//调用生成数据
let data = generateUsers()
//JSON.stringify(data)把js对象转换成json，写入到data.json文件
fs.writeFileSync('data.json',JSON.stringify(data))