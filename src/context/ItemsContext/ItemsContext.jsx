import { createContext, useState, useEffect } from "react";

// Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState();
    const [cart, setCart] = useState([]);

    useEffect( () => {

        const getProducts = async () => {
            const q = query(collection(db, "productos"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setItems(docs);
        };
        getProducts();
    }
    , [])

    return (
        <ItemsContext.Provider value={{ items, cart, setCart }}>
            { children }
        </ItemsContext.Provider>
    )
}