# SocialMediaBackend


# Collection #1 User
The documents within this collection are structured as follows:

```

User{
  "_id": ObjectId,
  "userame": String,
  "email": String,
  "password": String,
  "profilePicture": Date,
  "coverPicture": String,
  "posts": [String],
  "followings": [String],
  "followers": [String],
  "isAdmin": Boolean,
}


```

# Collection #2 Post
The documents within this collection are structured as follows:
```
Post{
  "_id": ObjectId,
  "userId": String,
  "desc": String,
  "img": String,
  "likes": [string], 
}

```

# Collection #3 Message
The documents within this collection are structured as follows:
```

Message{
  "_id": ObjectId,
  "conversationId": String,
  "sender": String,
  "text": String,
  "timestamps": true,
}

```



# Collection #4 Conversation
The documents within this collection are structured as follows:
```

Conversation{
  "_id": ObjectId,
  "members":[String],
  "timestamps": true,
}

```

