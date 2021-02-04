import React, { useState, useEffect } from "react";
import Item from "./Item";
import './MyList.css';


function MyList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const temp = [];
        for (let index = 0; index < 90; index++) {
            console.log("Adding...")
            temp.push({
                "key": index
            });
        }
        setItems(temp.map((item) => item));
    }, []);

    return (
        <div className="MyList">
            <div className="MyList__content">
                My items:
                <div className="MyList__items">
                    {items.map(item => (
                        <Item key={item.key} />
                    ))}

                    {/* Refactor to a method */}
                    {items.length > 0 &&
                        <div>
                            End of the list.
                        </div>
                    }
                    {items.length === 0 &&
                        <div>
                            No items!
                        </div>
                    }
                </div>

            </div>


        </div>
    );
}

export default MyList;
