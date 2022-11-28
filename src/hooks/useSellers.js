import { useEffect, useState } from 'react';

const useSellers = email => {
    const [isSeller, setSeller] = useState(false);
    const [isSellerLoading, setSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://wavey-jam-a12-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSeller(data.isSeller);
                    setSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default useSellers;