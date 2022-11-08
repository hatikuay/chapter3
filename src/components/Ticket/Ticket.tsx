import React, {FC} from 'react';
import "./Ticket.css"

type TicketType  = {
  id:string;
  title:string;
  body:string;
}

type TicketProps = {
  marginRight:string; 
  onDragStart:(event:any, ticketId:string) => void;
  ticket: TicketType; 
}

const Ticket:FC<TicketProps> = (props:TicketProps) => (
  <div className='TicketWrapper'
    draggable
    onDragStart={e => props.onDragStart && props.onDragStart(e, props.ticket.id)}
    marginRight={props.marginRight}
  >
    <h3 className='Title'>{props.ticket.title}</h3>
    <div className='Body'>{props.ticket.body}</div>
  </div>
);

export default Ticket;
