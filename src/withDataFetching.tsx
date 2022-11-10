import React, { FC, useEffect, useState } from 'react';

export default function withDataFetching(WrappedComponent: React.FC<any>) {

  const WithDataFetching: FC<WithDataFetchingProps> = (props: WithDataFetchingProps) => {
    const [data, setData] = useState<Array<TicketType>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = async () => {
      try {
        const data = await fetch(props.dataSource);
        const dataJSON = await data.json();

        if (dataJSON) {
          setData(dataJSON);
          setLoading(false);
          console.log(dataJSON);
        }
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    }

    useEffect(() => { 
      fetchData()
    },[])


    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  }


  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
}
