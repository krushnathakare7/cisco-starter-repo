import { useEffect, useState } from "react";

const Latency = () => {
    
    const [latency, setLatency] = useState(0)

    useEffect(()=>{
        const socket = new WebSocket("ws://localhost:55455");
        socket.addEventListener("open", (event) => {
            socket.send("Hello Server!");
          });
          let lastMessage = null;
          let timeDifference = null;
           socket.addEventListener("message", (event) => {
             const currentMessage = new Date().getTime();
             if(lastMessage) {
                 timeDifference = currentMessage - lastMessage ;
                 if(timeDifference) setLatency(timeDifference);
     
             }
             console.log("Message from server ", event.data);
             console.log('time difference from last msg and cur msg in ms', timeDifference/1000)
             lastMessage = currentMessage;
           });
     
    },[])
  


    return(
        <div>Latency : {latency} ms </div>
    )
}

export default Latency;