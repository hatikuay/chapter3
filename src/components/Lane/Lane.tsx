import React, { FC } from "react";
import Ticket from "../Ticket/Ticket";

type TicketType  = {
  id:string;
  title:string;
  body:string;
}

type LaneProps = {
  laneId: string;
  tickets: Array<TicketType>;
  loading: string;
  error: string;
  onDragStart: (event:any, ticketId:string) => void;    
  onDragOver: (event:any) => void;
  onDrop: (event:any, laneId:string) => void
  title: string;
};

const Lane: FC<LaneProps> = (props: LaneProps) => (
  <div
    className="LaneWrapper"
    onDragOver={(e) => props.onDragOver(e)}
    onDrop={(e) => props.onDrop(e, props.laneId)}
  >
    <h2 className="Title">{props.title}</h2>
    {(props.loading || props.error) && (
      <div className="Alert">{props.loading ? "Loading..." : props.error}</div>
    )}
    <div className="TicketsWrapper">
      {props.tickets.map((ticket) => (
        <Ticket key={ticket.id} onDragStart={props.onDragStart} ticket={ticket} />
      ))}
    </div>
  </div>
);

export default Lane;
