import { useState, useEffect } from "react";

export default function AllFiles () {

    const [ datasUsers, setDatasUsers ] = useState([]);

    useEffect( async () => {
        const request = await fetch("http://localhost:3333/all/user/producer");
          const json = await request.json();
          const dataOne = json.data;
          setDatasUsers(dataOne);
      }, []);

    return(
        <>
            {datasUsers.map((item) => <p key={item.pdc_id}>{item.pdc_first_name}</p>)}
        </>
    )
}