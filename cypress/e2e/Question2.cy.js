
describe("Test form",()=>{
    it("Test Register page",()=>{
        cy.visit("https://demo.automationtesting.in/Register.html");

        //checkbox
        cy.get("#checkbox3").click();

        //language multiselect
        cy.get("#msdd").click({force:true});

    })
})