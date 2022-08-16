import React, { useState, useContext, createContext, useEffect } from "react";
import { picTransform } from "./pictures.service";

export const PictureContext = createContext({});

export const PictureContextProvider = ({ children }) => {
    const [pictures, setpictures] = useState([]);
    useEffect(() => {
      setpictures(picTransform);
      console.log(pictures)
    
    }, []);
    return (
        <PictureContext.Provider
          value={{
            pictures
          }}
        >
          {children}
        </PictureContext.Provider>
      );
}