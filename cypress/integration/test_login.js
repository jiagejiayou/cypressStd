context("登录测试",()=>{
    it.skip("web--输入正确的用户名和密码，可以登录成功",()=>{
    cy.visit("https://testerhome.com/account/sign_in")
    cy.get("#user_login").type("jiagejiay1")
    cy.get("#user_password").type(`xiaoniuer11...{enter}`)
    })

    it.only("接口--输入正确的用户名和密码，请求可以成功",()=>{
        cy.request({
            url:"https://testerhome.com/account/sign_in",
            method: 'post',
            form:true,
            body:{
                'user_login':'jiagejiay1',
                'user_password':'xiaoniuer11...',
                'submit':'登录'
            }
        }).then(response=>{
            cy.log(response.body)
            cy.log(response.status)
        })
    })
})