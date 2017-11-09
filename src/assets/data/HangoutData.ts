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
        id: 1,
        author: [UserData[1].id],
        comment: "Hey is there gluten-free beer?",
        createdTime: new Date()
    },
    {
        id: 2,
        author: [UserData[2].id],
        comment: "Nice idea!",
        createdTime: new Date()
    },
    {
        id: 3,
        author: [UserData[1].id],
        comment: "Let's not invite Thomas, he's an asshole",
        createdTime: new Date()
    },
    {
        id: 4,
        author: [UserData[4].id],
        comment: "Agree!",
        createdTime: new Date()
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
