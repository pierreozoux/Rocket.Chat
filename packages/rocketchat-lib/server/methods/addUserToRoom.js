Meteor.methods({
	addUserToRoom: function(data) {
		return Meteor.call('addUsersToRoom', {
			rid: data.rid,
			users: [ data.username ]
		});
	}
});
