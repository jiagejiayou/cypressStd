describe('登录',()=>{
        it.only("接口--输入正确的用户名和密码，请求可以成功",()=>{
        cy.request({
            url:"https://api2.mubu.com/v3/api/user/phone_login ",
            method: 'post',
            form:true,
            body:{
                'phone':'18628359732',
                'password':'xiaoniuer11',
                'callbackType':0
            }
        }).its('body')
            .should('contain',{'code':0})
        })
    })
