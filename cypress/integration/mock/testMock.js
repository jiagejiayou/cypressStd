describe('mock',()=>{
  it('get',()=>{
      cy.request({
          url:'http://localhost:3000/user',
          method:'get'
      }).its('body').should('include','name')
  })

     let item =  {
                name: "dsdgEAH",
                jobtitle: "National Interactions Orchestrator",
                email: "10796309@qq.com"
            }
    it('post',()=>{
        cy.intercept()
        cy.request({
            url: "http://localhost:3000/user",
            method:'post',
            body: item,
            headers: {'Content-Type':'application/json'}
        })
    })
})