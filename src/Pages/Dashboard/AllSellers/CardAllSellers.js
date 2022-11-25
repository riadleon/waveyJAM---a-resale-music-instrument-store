import React from 'react';

const CardAllSellers = ({ seller }) => {
    const { name, email } = seller;
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
                <button className="btn btn-ghost btn-xs bg-cyan-800 text-white">Verify</button>
            </th>
        </tr>
    );
};

export default CardAllSellers;