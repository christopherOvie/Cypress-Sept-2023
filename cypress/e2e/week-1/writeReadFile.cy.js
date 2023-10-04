const { it } = require("mocha");

describe('write and read file',()=>{


    it('test input content to text file',()=>{
cy.writeFile('cypress/fixtures/text.txt',"hello world")
cy.readFile("cypress/fixtures/text.txt").then((actual)=>{
expect(actual).to.eq("hello world");
})
    })

    it.only('test input content to json file',()=>{
        cy.writeFile('cypress/fixtures/test.json',{
            name:"james",
            email:"james@test.com",
            phone:23444445
        })
        
        cy.readFile("cypress/fixtures/test.json").then((actual)=>{
        const actualOutput=JSON.stringify(actual)
        const expectedOutput=JSON.stringify({
   
            name:"james",
        email:"james@test.com",
        phone:23444445
             });
             expect(actualOutput).to.eq(expectedOutput);
        })

    it('fetches password from website and store in a json file', () => {
        cy.visit("");
        
    });

    })

})