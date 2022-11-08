import React, { useEffect, useState } from 'react';

export default function withDataFetching(WrappedComponent:React.FC) {
  const WithDataFetching = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    const fetchData = async () => {
      try {
        const data = await fetch(this.props.dataSource);
        const dataJSON = await data.json();

        if (dataJSON) {
          setData(dataJSON);
          setLoading(false);
        }  
      } catch (error:any) {
        setLoading(false);
        setError(error.message);
      }
    }

    useEffect(()=>{fetchData(),[]})


      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
}
