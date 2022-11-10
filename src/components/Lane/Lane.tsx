import React, { FC } from "react";
import Ticket from "../Ticket/Ticket";
import "./Lane.css";

const Lane: FC<LaneProps> = (props: LaneProps) => (
  <div
    className="LaneWrapper"
    onDragOver={(event:any) => props.onDragOver(event)}
    onDrop={(event:any) => props.onDrop(event, props.laneId)}
  >
    <h2 className="Title">{props.title}</h2>
    {(props.loading || props.error) && (
      <div className="Alert">{props.loading ? "Loading..." : props.error}</div>
    )}
    <div className="TicketWrapper">
      {props.tickets.map((ticket) => (
        <Ticket key={ticket.id} onDragStart={props.onDragStart} ticket={ticket} marginRight />
      ))}
    </div>
  </div>
);

export default Lane;
