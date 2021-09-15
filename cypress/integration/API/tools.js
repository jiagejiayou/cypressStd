export default class Tools{
    generate_token(){
         cy.request({
            url:"https://api2.mubu.com/v3/api/user/phone_login ",
            method: 'POST',
            form:true,
            body:{
                'phone':'18628359732',
                'password':'xiaoniuer11',
                'callbackType':0
            }
        }).then(res=>{
            cy.wrap(res.body.data.token).as('token')
        })

    }
}