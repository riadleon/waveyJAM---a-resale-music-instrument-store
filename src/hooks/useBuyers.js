import { useEffect, useState } from 'react';

const useBuyers = email => {
    const [isBuyer, setBuyer] = useState(false);
    const [isBuyerLoading, setBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://wavey-jam-a12-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBuyer(data.isBuyer);
                    setBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyers;