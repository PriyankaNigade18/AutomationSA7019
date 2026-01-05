
import {test,expect} from "@playwright/test"
import { describe } from "@playwright/test"

describe.serial("This is suite1",()=>{

    //hooks

    test.beforeAll(()=>{
    console.log("Before All executes before all test cases");
    });

    test.afterAll(()=>{
    console.log("After All executes after all test casess");
    });

    test.beforeEach(()=>{
    console.log("Before Each executes before every test case");
    });

    test.afterEach(()=>{
    console.log("Afeter Each executes after every test case");
    });

test("This is first test",()=>{
    console.log("This is is test1");
    
})

test("This is second test",()=>{
    console.log("This is is test2");
    
})


test("This is third test",()=>{
    console.log("This is is test3");
    
})



})