import { UserData } from './UserData';

export const EventTypes = [
    'Beer',
    'Food',
    'Sports',
    'Coffee',
    'Work',
    'Learning'
];

export const CommentTypes = ['publicComment', 'privateMessage']

export const Comments = [
    {
        id: 0,
        author: UserData[1].id,
        comment: "Hey is there gluten-free beer?",
        createdTime: new Date(),
        type: CommentTypes[0],
    },
    {
        id: 1,
        author: UserData[0].id,
        comment: "Nice idea!",
        createdTime: new Date(),
        type: CommentTypes[0],
    },
    {
        id: 2,
        author: UserData[2].id,
        comment: "Let's not invite Thomas, he's an asshole",
        createdTime: new Date(),
        type: CommentTypes[0],
    },
    {
        id: 3,
        author: UserData[0].id,
        comment: "Agree!",
        createdTime: new Date(),
        type: CommentTypes[1],
    },
    {
        id: 4,
        author: UserData[1].id,
        comment: "Secrettt!",
        createdTime: new Date(),
        type: CommentTypes[1],
    }
];

export const HangoutData = [
{
    id: 1,
    fromTime: new Date(2017,11,15,21,0,0),
    toTime: new Date(2017,11,15,22,0,0),
    description: "Is anyone up for just one beer tonight? Just one",
    place: "Södermalm",
    type: EventTypes[0],
    owner: UserData[0].id,
    pendingUsers: [UserData[2].id],
    confirmedUsers: [UserData[0].id, UserData[1].id],
    rejectedUsers: [],
    commentIds: [Comments[2].id, Comments[1].id],
    privateMessageIds: [Comments[4].id],
},
{
    id: 2,
    fromTime: new Date(2017,11,17,19,0,0),
    toTime: new Date(2017,11,17,20,0,0),
    description: "Tech people in town, do you know some nice cafe to work? let's go together!",
    place: "Kista Galleria",
    type: EventTypes[2],
    owner: UserData[1].id,
    pendingUsers: [UserData[0].id],
    confirmedUsers: [UserData[2].id],
    rejectedUsers: [],
    commentIds: [Comments[0].id, Comments[2].id],
    privateMessageIds: [Comments[2].id],
},
{
    id: 3,
    fromTime: new Date(2017,11,17,20,0,0),
    toTime: new Date(2017,11,17,22,0,0),
    description: "Tech people in town, let's go together!",
    place: "KTH Hallen",
    type: EventTypes[3],
    owner: UserData[2].id,
    pendingUsers: [],
    confirmedUsers: [],
    rejectedUsers: [],
    commentIds: [Comments[0].id, Comments[1].id],
    privateMessageIds: [Comments[2].id, Comments[3].id],
},
{
    id: 4,
    fromTime: new Date(2017,11,18,20,0,0),
    toTime: new Date(2017,11,18,22,0,0),
    description: "Anyone interested in Italy game?",
    place: "Östermalm",
    type: EventTypes[0],
    owner: UserData[3].id,
    pendingUsers: [],
    confirmedUsers: [UserData[0].id],
    rejectedUsers: [],
    commentIds: [Comments[2].id, Comments[1].id],
    privateMessageIds: [Comments[3].id],
}
];
