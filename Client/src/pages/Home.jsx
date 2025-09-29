import React, { useEffect, useState } from 'react'
import ItemService from '../services/item.service';
import Card from '../components/Card';
import swal from "sweetalert2";

const Home = () => {
  const [items,setItem] = useState([]);

const getAllItem = async () => {
  try {
    const response = await ItemService.getAllItem();

    if (response.status === 200) {
      setItem(response.data.data);
    }
  } catch (error) {
    swal.fire({
      title: "Get All Items",
      text: error?.response?.data?.message || error.message,
    });
  }
};
useEffect(() => {
    getAllItem();
}, []);


  return (
    <div>
      {items &&
        items.map((item) => (
          <Card
            key={item.itemId}
            itemId={item.id}
            title={item.author}
            author={item.author}
            coverImage={item.coverImage}
            description={item.description}
          />
        ))}
    </div>
  );
}

export default Home