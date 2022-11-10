import React, {FC} from 'react';
import withDataFetching from '../../withDataFetching';
import Ticket from '../../components/Ticket/Ticket';
import "./Tickets.css"

const Tickets:FC<TicketsProps> = (props:TicketsProps) => (
  <div className='TicketsWrapper'>
    {(props.loading || props.error) && <div className='Alert'>{props.loading ? 'Loading...' : props.error}</div>}
    {props.data.map(ticket => (
      <Ticket key={ticket.id} marginRight ticket={ticket} />
    ))}
  </div>
)

export default withDataFetching(Tickets);
