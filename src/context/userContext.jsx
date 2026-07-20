import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [allProductData, setAllProductData] = useState([]);
    const [addToCardItems, setAddToCardItems] = useState([]);
    const [addToCardOpen, setAddToCardOpen] = useState(false)

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
        <UserContext.Provider value={{ userData, setUserData, allProductData, setAddToCardOpen, setAddToCardItems, addToCardOpen, addToCardItems }}>
            {children}
        </UserContext.Provider>
    );
};
