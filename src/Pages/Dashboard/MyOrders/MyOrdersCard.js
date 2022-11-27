import React from 'react';
import { FaPaypal } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyOrdersCard = ({ booking }) => {
    console.log(booking)
    const { image, product, resalePrice, _id } = booking;
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
                        <div className="font-bold">{product}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>

            <td>{resalePrice}</td>

            <th>
                <Link to={`/dashboard/payment/${booking._id}`}> <button to className="btn btn-ghost btn-xs bg-cyan-800 text-white"> <FaPaypal></FaPaypal> Pay</button></Link>
            </th>
        </tr>
    );
};

export default MyOrdersCard;