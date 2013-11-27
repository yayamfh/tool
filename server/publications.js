//Meteor.publish('posts', function() {  return Posts.find(); });
//Meteor.publish('comments', function() {  return Comments.find(); });


Meteor.publish('posts', function() {  return Posts.find(); });
Meteor.publish('comments', function(postId) {  return Comments.find({postId: postId}); });

Meteor.publish('notifications', function() {  return Notifications.find(); });

Meteor.publish('newPosts', function(limit) {  return Posts.find({}, {sort: {submitted: -1}, limit: limit}); });
Meteor.publish('singlePost', function(id) {  return id && Posts.find(id); });
