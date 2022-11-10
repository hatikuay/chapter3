import React, { FC, useState, useEffect, useRef } from "react";
import withDataFetching from "../../withDataFetching";
import Lane from "../../components/Lane/Lane";
import "./Board.css";

const Board: FC<BoardProps> = (props: BoardProps) => {
  const [tickets, setTickets] = useState<Array<TicketType>>([]);
  const prevPropsRef = useRef<BoardProps>(props);
  useEffect(() => {
    if (prevPropsRef.current.data !== props.data) {
      setTickets(props.data);
    }
  }, [props.data]);

  const onDragStart = (event:any, id: number) => {
    event.dataTransfer.setData("id", id.toString());
  };

  const onDragOver = (event:any) => {
    event.preventDefault();
  };

  const onDrop = (event:any, laneId: number) => {
    const id = event.dataTransfer.getData("id");

    const myTickets = tickets.filter((ticket) => {
      if (ticket.id === parseInt(id)) {
        ticket.lane = laneId;
      }
      return ticket;
    });

    setTickets(myTickets);
  };

  return (
    <div className="BoardWrapper">
      {props.lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={props.loading}
          error={props.error}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          tickets={tickets.filter((ticket) => ticket.lane === lane.id)}
        />
      ))}
    </div>
  );
};

export default withDataFetching(Board);
