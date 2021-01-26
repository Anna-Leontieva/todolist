import {userReducer, UserType} from './user-reducer'
test("increment age",()=>{
    const startUser:UserType={
        name:"Alex",
        age:29,
        childrenCount:3
    }
   const endUser =userReducer(startUser,{type:'INCREMENT-AGE'})
   expect(endUser.age).toBe("30");
})