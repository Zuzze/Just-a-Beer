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

export const Comments = {
    0: {
        id: 0,
        author: [UserData[1].id],
        comment: "Hey is there gluten-free beer?",
        createdTime: new Date(),
        type: CommentTypes[0], 
    },
    1: {
        id: 1,
        author: [UserData[2].id],
        comment: "Nice idea!",
        createdTime: new Date(),
        type: CommentTypes[0], 
    },
    2: {
        id: 2,
        author: [UserData[1].id],
        comment: "Let's not invite Thomas, he's an asshole",
        createdTime: new Date(),
        type: CommentTypes[1], 
    },
    3: {
        id: 3,
        author: [UserData[2].id],
        comment: "Agree!",
        createdTime: new Date(),
        type: CommentTypes[1], 
    }
};

export const HangoutData = [
{
    id: 1,
    fromTime: new Date(),
    toTime: new Date(),
    description: "Is anyone up for just one beer tonight? Just one",
    place: "Sodermalm",
    types: [EventTypes[0], EventTypes[1]],
    owner: UserData[0].id,
    pendingUsers: [UserData[2].id],
    confirmedUsers: [UserData[1].id],
    rejectedUsers: [],
    commentIds: [Comments[0].id, Comments[1].id],
    privateMessageIds: [Comments[2], Comments[3]],
},
{
    id: 2,
    fromTime: new Date(),
    toTime: new Date(),
    description: "Tech people in town, do you know some nice cafe to work? let's go together!",
    place: "Kista Galleria",
    types: [EventTypes[0], EventTypes[2]],
    owner: UserData[1].id,
    pendingUsers: [UserData[0].id],
    confirmedUsers: [UserData[2].id],
    rejectedUsers: [],
    commentIds: [Comments[0].id, Comments[1].id],
    privateMessageIds: [Comments[2], Comments[3]],
},
{
    id: 3,
    fromTime: new Date(),
    toTime: new Date(),
    description: "Tech people in town, let's go together!",
    place: "KTH Hallen",
    types: [EventTypes[0], EventTypes[3]],
    owner: UserData[2].id,
    pendingUsers: [],
    confirmedUsers: [UserData[0].id],
    rejectedUsers: [UserData[1].id],
    commentIds: [Comments[0].id, Comments[1].id],
    privateMessageIds: [Comments[2], Comments[3]],
}
];
