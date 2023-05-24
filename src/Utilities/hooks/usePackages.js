import { useEffect, useState } from "react";


function usePackages(){
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-package.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return [packages, setPackages];
}

export default usePackages;