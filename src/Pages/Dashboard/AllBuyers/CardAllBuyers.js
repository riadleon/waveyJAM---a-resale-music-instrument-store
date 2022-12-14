import React from 'react';

const CardAllBuyers = ({ buyer }) => {
    const { name, email } = buyer;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div> */}
                    <div>
                        <div className="font-bold">{name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>

            <td> {email}</td>

            <th>
                <button className="btn btn-ghost btn-xs bg-rose-800 text-white mx-4">Delete</button>
               
            </th>
        </tr>
    );
};

export default CardAllBuyers;