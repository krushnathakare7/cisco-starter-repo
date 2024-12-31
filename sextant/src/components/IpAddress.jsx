import { useEffect, useState } from "react";


const IpAddress = ({ip}) => {

    const [ipAddress,setIpAddress] = useState('');

    useEffect(()=> {
        const fetchIp = async (ip) => {
            if(ip === "ipv4") {
              const response = await fetch("https://api.ipify.org?format=json");
              const data = await response.json();
              setIpAddress(data.ip)
            }else{
                const response = await fetch("https://api64.ipify.org?format=json");   
                const data = await response.json();
                setIpAddress(data.ip)
            }
        }
        fetchIp(ip)
    },[ip])

    return (
        <>
            <div id="card" style={{padding: "15px"}}>
                <h3>Your Public {ip} address is: </h3>
                <h4>{ipAddress}</h4>
            </div>
        </>
    )
}

export default IpAddress;