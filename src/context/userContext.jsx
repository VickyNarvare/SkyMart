import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const safeParse = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
};

export const UserContextProvider = ({ children }) => {
    const [usersData, setUsersData] = useState(safeParse(localStorage.getItem("allUser")) || []);
    const [singleUserData, setSingleUserData] = useState(safeParse(localStorage.getItem("user")));
    const [allProductData, setAllProductData] = useState([]);
    const [addToCardItems, setAddToCardItems] = useState([]);
    const [addToCardOpen, setAddToCardOpen] = useState(false)
    const [mainScreen, setMainScreen] = useState(!!safeParse(localStorage.getItem("user")))


    const productData = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/products");
            setAllProductData(() => data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        productData();
    }, []);
    return (
        <UserContext.Provider value={{ mainScreen, setMainScreen, usersData, singleUserData, setSingleUserData, setUsersData, allProductData, setAddToCardOpen, setAddToCardItems, addToCardOpen, addToCardItems }}>
            {children}
        </UserContext.Provider>
    );
};
