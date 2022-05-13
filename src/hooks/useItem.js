import { useEffect, useState } from 'react';

const useItem = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);
    return [inventory, setInventory]
};

export default useItem;