import UserData from './UserData'

export const EventTypes = [
    'Beer', 
    'Food', 
    'Sports', 
    'Coffee', 
    'Work', 
    'Learning'
];

export const Comments = [
    {
        id: 1
    }
];

export const EventData = [
{
    id: 1,
    fromTime: new Date(),
    toTime: new Date(),
    description: "adsasd",
    place: "Replace with google map coordinates",
    types: [EventTypes[0], EventTypes[1]],
    owner: UserData[1].id,
    pendingUsers: [UserData[4].id, UserData[3].id],
    confirmedUsers: [UserData[1].id, UserData[2].id],
    rejectedUsers: [UserData[0].id],
    comments: [Comments[1], Comments[2]],
    privateMessages: [Comments[3], Comments[4]],
}
];

