class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function manageTickets(descriptions: string[], criteria: string): Ticket[] {
    const allTickets: Ticket[] = [];

    for (const ticket of descriptions) {
        const [destName, priceString, status] = ticket.split("|");
        const price = Number(priceString);
        const newTicket = new Ticket(destName, price, status);

        allTickets.push(newTicket);
    }

    let sortetdTickets: Ticket[] = [];

    if (criteria === "price") {
        sortetdTickets = allTickets.sort((a, b) => a[criteria] - b[criteria]);
    } else if (criteria === "destination" || criteria === "status") {
        sortetdTickets = allTickets.sort((a, b) =>
            a[criteria].localeCompare(b[criteria])
        );
    }

    console.log(allTickets);
    return allTickets;
}

// manageTickets(
//     [
//         "Philadelphia|94.20|available",
//         "New York City|95.99|available",
//         "New York City|95.99|sold",
//         "Boston|126.20|departed",
//     ],
//     "destination"
// );

manageTickets(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "status"
);
