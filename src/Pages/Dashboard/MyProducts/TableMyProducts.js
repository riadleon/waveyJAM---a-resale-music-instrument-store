import React, { useState } from 'react';
import toast from 'react-hot-toast';

const TableMyProducts = ({ product, handleAddAdvertise }) => {
    const { image, location, name, number, originalPrice, resalePrice, email, time, uses, _id, sname } = product;
    // const [refresh, setRefresh] = useState(false);

    // const advertise = {
    //     image,
    //     location,
    //     name,
    //     number,
    //     originalPrice,
    //     resalePrice,
    //     email,
    //     time,
    //     uses,
    //     _id,
    //     sname
    // }

    // const handleAddAdvertise = () => {
    //     fetch('http://localhost:8000/advertise', {
    //         method: "POST",
    //         // headers: {
    //         //     authorization: `Bearer ${localStorage.getItem(' secureWeb-token')}`
    //         // }
    //         body: JSON.stringify(advertise)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.success) {
    //                 toast.success("added to advertise list");
    //                 setRefresh(!refresh);
    //             } else {
    //                 toast.error("Failed to add in advertise list");
    //             }
    //         }).catch(err => toast.error(err.message))
    // }
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {sname}


                <br />
                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td> {email}</td>
            <td>{uses}</td>
            <td>{resalePrice}</td>
            <th>
                <button className="btn btn-ghost btn-xs bg-rose-800 text-white m-4">Delete</button>
                <button onClick={() => handleAddAdvertise(product)} className="btn btn-ghost btn-xs bg-cyan-800 text-white">Advertise</button>
            </th>
        </tr>
    );
};

export default TableMyProducts;


// onClick={() => handleDelete(_id)}