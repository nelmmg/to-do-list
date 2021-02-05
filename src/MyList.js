import React, { useState, useEffect } from "react";
import Item from "./Item";
import './MyList.css';


function MyList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const temp = [];
        for (let index = 0; index < 15; index++) {
            console.log("Adding...")
            temp.push({
                key: index
            });
        }
        setItems(temp.map((item) => item));
    }, []);

    return (
        <div className="MyList">
            <div className="MyList__content">
                My tasks:
                <div className="MyList__items">
                    {items.map((item, index) => (
                        <div key={index}>
                            <Item />
                            <div className="MyList__divisor" />
                        </div>
                    ))}

                    {/* Refactor to a method */}
                    {items.length > 0 &&
                        <div className="MyList__label">
                            End of the list
                        </div>
                    }
                    {items.length === 0 &&
                        <div className="MyList__label">
                            No items!
                        </div>
                    }
                </div>

            </div>


        </div>
    );
}

export default MyList;
