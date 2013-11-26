/Meteor.subscribe('posts'); 
Meteor.subscribe('comments');/


/Meteor.subscribe('posts');
Deps.autorun(function() {  Meteor.subscribe('comments', Session.get('currentPostId')); });
Meteor.subscribe('notifications');/

/postsHandle = Meteor.subscribeWithPagination('posts', 10);
Deps.autorun(function() {  Meteor.subscribe('comments', Session.get('currentPostId')); })
Meteor.subscribe('notifications');/


postsHandle = Meteor.subscribeWithPagination('newPosts', 10);
Deps.autorun(function() {  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  Meteor.subscribe('comments', Session.get('currentPostId')); })
Meteor.subscribe('notifications');
