import React from 'react';
import Inventories from '../Inventories/Inventories';

const MyItem = () => {
    // const [user] = useAuthState(auth);
    // // const [inventories, setItem] = useState([]);
    // const email = user.email;
    // console.log(email);

    // useEffect(() => {
    //     fetch(`https://immense-sea-41969.herokuapp.com/myitem?email=${email}`)
    //         .then((res) => res.json())
    //         .then((data) => setItem(data));

    // }, []);


    // const [user] = useAuthState(auth);
    // const [inventories, setInventories] = useState([]);
    // // const navigate = useNavigate();

    // useEffect(() => {
    //     fetch(`https://immense-sea-41969.herokuapp.com/myitem?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => setInventories(data));
    //     // .then(data => setInventories(data.slice(0, 3)));
    // }, [user, inventories])



    return (

        // <div className='row row-cols-1 row-cols-md-3  mt-5 mr-5 ml-5'>

        //     {
        //         inventories.map((inventory) => <MySingleItem
        //             key={inventory._id}
        //             inventory={inventory}>

        //         </MySingleItem>)
        //     }


        // </div>
        <div>

            <Inventories></Inventories>

        </div>


    );
};

export default MyItem;