import { useEffect, useState } from 'react';

const useItem = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://immense-sea-41969.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);
    return [inventory, setInventory]
};

export default useItem;