import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ModalCategoryProduct = ({ product, setProduct, refetch }) => {
    const { name: productName, originalPrice, resalePrice } = product;
    const { user } = useContext(AuthContext);

    const handleProductBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const productBooking = {
            product: productName,
            Seller: name,
            email,
            phone,
             resalePrice,
             originalPrice,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:8000/productBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Product Booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal mx-12">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleProductBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        {/* <input name=" resalePrice" type="number" defaultValue={resalePrice} disabled placeholder="Email Address" className="input w-full input-bordered" /> */}
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModalCategoryProduct;