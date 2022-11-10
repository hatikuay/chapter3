type TicketType = {
    id: number;
    title: string;
    body: string;
    lane: number
}

type LaneProps = {
    laneId: number;
    tickets: Array<TicketType>;
    loading: boolean;
    error: string;
    onDragStart: (event:any, ticketId: number) => void;
    onDragOver: (event:any) => void;
    onDrop: (event:any, laneId: number) => void
    title: string;
}

type TicketWrapperProps = {
    children: Array<JSX.Element> | JSX.Element;
    marginRight: boolean;
    draggable: boolean;
    onDragStart: (event: any, ticketId: number) => void;
}

type TicketProps = {
    marginRight: boolean;
    onDragStart?: (event: any, ticketId: number) => void;
    ticket: TicketType;
}

type Lane = {
    id: number;
    title: string;
}

type TicketsProps = {
    loading: boolean;
    error: string;
    data: Array<TicketType>;
}

type BoardProps = {
    loading: boolean;
    error: string;
    data: Array<TicketType>;
    lanes: Array<Lane>
}

type WithDataFetchingProps = {
    dataSource: string;
    lanes?: Array<Lane>
}

