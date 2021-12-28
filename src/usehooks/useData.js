import { useEffect } from "react";
import { useState } from "react";

 const useData = () => {
        const [campaigns, setCampaigns]= useState([]);
        useEffect(() => {
            fetch("./demoData.json")
            .then(res=>res.json())
            .then(data=>setCampaigns(data))
        },[]);
        return [campaigns,setCampaigns];
};

export default useData;