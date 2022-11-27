import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.waveyToken) {
                        localStorage.setItem('waveyToken', data.waveyToken);
                        setToken(data.waveyToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;