import React, { FC } from "react";
import "./Ticket.css";

const Ticket: FC<TicketProps> = (props: TicketProps) => {
  
  let marginRight:string;
  !!props.marginRight ? marginRight = '1%' : marginRight = '0'
  
  const Ticket = {
    backgroundColor: "darkGray",
    padding: "20px",
    borderRadius: "20px",
    marginBottom: "5%",
    marginRight: marginRight
  };

  return (
  <div style={Ticket}
    draggable
    onDragStart={(event:React.DragEvent<HTMLDivElement>) =>
      props.onDragStart && props.onDragStart(event, props.ticket.id)
    }
    
  >
    <h3 className="Title">{props.ticket.title}</h3>
    <div className="Body">{props.ticket.body}</div>
  </div>)
}

export default Ticket;
