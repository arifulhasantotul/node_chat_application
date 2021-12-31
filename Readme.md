Requirement analysis

### Login Page

1/ Field (username, password) & Login Button
2/ username maybe email or phone number
3/DB - mongoDB
4/ users collection => name, email, password, avatar, mobile, role

### Inbox Page

1/ messages collection => text, attachment, sender, receiver, date_time
2/ conversation collection => id, creator_id, participant, last_updated

### DB Relation

1/ users === messages.sender & messages.receiver
2/ users === conversations.creator_id & conversations.participant

3/ messages.conversation_id === conversations.id

### Functionality (User)

1/ addUser - add new user
2/ login - login user
3/ delete - delete user
4/ edit - edit user (task)

### Functionality (Conversation)

1/ getConversations - get logged in user's conversations
2/ getMessages - get messages of a conversation
3/ sendMessage - send message to recipient
4/ addConversation - add new conversation
6/ deleteConversation - delete a conversation

### ejs

### mongoose

### multer

### cookie-parser

### express-validator

### jsonwebtoken

### bcrypt

### http-errors
