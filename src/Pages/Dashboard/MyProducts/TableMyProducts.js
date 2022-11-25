import React from 'react';

const TableMyProducts = ({ product }) => {
    const { image, location, name, number, originalPrice, resalePrice, email, time, uses, _id, sname } = product;
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
            <td>{location}</td>
            <td>{resalePrice}</td>
            <td>{originalPrice}</td>
            <td>{time} </td>
            <th>
                <button  className="btn btn-ghost btn-xs bg-rose-800 text-white">Delete</button>
            </th>
        </tr>
    );
};

export default TableMyProducts;


// onClick={() => handleDelete(_id)}