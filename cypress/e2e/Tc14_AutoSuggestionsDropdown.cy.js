

describe("Test for AutoSuggestion or Bootstrap dropdown",()=>{


it("Test For Goibibo app",()=>{
    cy.visit("https://www.goibibo.com/flights");

    //close the popup
    cy.get("span.icClose").click();

    //from
    cy.get("#fromCity").click();

    cy.get("input[placeholder='From']").type("pune");

    cy.wait(1500);

    cy.get("ul[role='listbox']>li span.makeFlex>span").each(($option)=>{

        cy.log($option.text());
        if($option.text().includes("Navi Mumbai International Airport"))
        {
            cy.wrap($option).click();
            
        }
    })


})



})