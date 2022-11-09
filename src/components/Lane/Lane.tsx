import React, { FC } from "react";
import Ticket from "../Ticket/Ticket";

const Lane: FC<LaneProps> = (props: LaneProps) => (
  <div
    className="LaneWrapper"
    onDragOver={(event:React.DragEvent<HTMLDivElement>) => props.onDragOver(event)}
    onDrop={(event:React.DragEvent<HTMLDivElement>) => props.onDrop(event, props.laneId)}
  >
    <h2 className="Title">{props.title}</h2>
    {(props.loading || props.error) && (
      <div className="Alert">{props.loading ? "Loading..." : props.error}</div>
    )}
    <div className="TicketsWrapper">
      {props.tickets.map((ticket) => (
        <Ticket key={ticket.id} onDragStart={props.onDragStart} ticket={ticket} marginRight />
      ))}
    </div>
  </div>
);

export default Lane;
