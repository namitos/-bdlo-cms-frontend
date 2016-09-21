'use strict';

class User extends Model {
	static get schema() {
		return schemas.User;
	}

	permission(permissionString) {
		return _.includes(this.permissions, permissionString) || _.includes(this.permissions, 'full access');
	}
}