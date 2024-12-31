import IpAddress from "./IpAddress"
import './Dashboard.css'

const Dashboard = () => {

    const IPV4 = "ipv4";
    const IPV6 = "ipv6";

    return (
        <>
            <div id="dashboard">
                <h2 id="stats">Ip Stats: </h2>
                <div id="container">
                    <IpAddress ip={IPV4}/>  
                    <IpAddress ip={IPV6}/>  
                </div>
                    
            </div>
        </>
    )
}

export default Dashboard;