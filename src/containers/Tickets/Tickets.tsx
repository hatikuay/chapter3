import React, {FC} from 'react';
import withDataFetching from '../withDataFetching';
import Ticket from '../../components/Ticket/Ticket';

type TicketType = {
  id:string;
  title:string;
  body:string;
}

type TicketsProps = {
  loading:string;
  error:string;
  data:Array<TicketType>; 
}

const Tickets:FC<TicketsProps> = (props:TicketsProps) => (
  <div className='TicketsWrapper'>
    {(props.loading || props.error) && <div className='Alert'>{props.loading ? 'Loading...' : props.error}</div>}
    {props.data.map(ticket => (
      <Ticket key={ticket.id} marginRight ticket={ticket} />
    ))}
  </div>
);

export default withDataFetching(Tickets);
