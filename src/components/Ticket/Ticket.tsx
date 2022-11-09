import React, { FC } from 'react';
import "./TicketWrapper.css"

const TicketWrapper: FC<TicketWrapperProps> = (props: TicketWrapperProps) => {

  return (
    <style>{`
      div {
        background: darkGray;
        padding: 20px;
        border-radius: 20px;
        &:not(:last-child) {
          marginBottom: "5%",
          marginRight: ${() => (!!props.marginRight ? '1%' : '0')};
        }
      }`
    }
      <div>
        {props.children}
      </div>
    </style>
  );
};



const Ticket: FC<TicketProps> = (props: TicketProps) => (
  <TicketWrapper
    draggable
    onDragStart={e => props.onDragStart && props.onDragStart(e, props.ticket.id)}
    marginRight={props.marginRight}
  >
    <h3 className='Title'>{props.ticket.title}</h3>
    <div className='Body'>{props.ticket.body}</div>
  </TicketWrapper>
);

export default Ticket;
