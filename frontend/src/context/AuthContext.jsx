// import { createContext, useEffect, useState } from "react";
// import Login from "../components/Login";
// 
// export const AuthContext = createContext();
// 
// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = 
//         useState(() => JSON.parse(localStorage.getItem('isLoggedIn')))
// 
//     useEffect(() => {
//         localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
//     }, [isLoggedIn]);
// 
//     return (
//         <AuthContext.Provider value= {{ isLoggedIn, setIsLoggedIn }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }