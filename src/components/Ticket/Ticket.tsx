import React, { FC } from "react";
import "./Ticket.css";

/*
        &:not(:last-child) {
          marginBottom: "5%",
          marginRight: ${() => (!!props.marginRight ? '1%' : '0')};

*/

const Ticket: FC<TicketProps> = (props: TicketProps) => {
  
  let marginRight:string;
  !!props.marginRight ? marginRight = '1%' : marginRight = '0'
  
  const h1Styles = {
    backgroundColor: "darkGray",
    padding: "20px",
    borderRadius: "20px",
    marginBottom: "5%",
    marginRight: marginRight
  };

  return (
  <div style={h1Styles}
    draggable
    onDragStart={(e) =>
      props.onDragStart && props.onDragStart(e, props.ticket.id)
    }
    
  >
    <h3 className="Title">{props.ticket.title}</h3>
    <div className="Body">{props.ticket.body}</div>
  </div>)
}

export default Ticket;
