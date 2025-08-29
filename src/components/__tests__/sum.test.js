import sum from "../sum";

test("sum of two numbers a and b",()=>{
     const result=sum(4,3);
     expect(result).toBe(7); 
})