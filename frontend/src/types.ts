// ten typ danych powinien być zaimportowany z dokumentacji backendu
export interface Groupchat {
    id: string,
    users: string[],
    leader: string
}
// ten typ danych nie ma nic wspólnego z niczym zdefiniowanym w dokumentacji :3
export interface Message {
    id: number,
    author: string,
    timestamp: string,
    type: string,
    content: string
}