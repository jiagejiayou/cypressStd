import Tools from './tools';
describe("创建新文档",()=>{
    beforeEach(()=>{
        let tools = new Tools();
        tools.generate_token()
    })
    it('创建文档',()=>{
        cy.request({
            method:'POST',
            url: "https://api2.mubu.com/v3/api/list/create_doc",
            headers: {"Content-Type": "application/json;charset=UTF-8","Jwt-Token":this.token},
            body: {"folderId":"0","type":0}
        }).its('body').should('contain',{"code":0})
    })
})