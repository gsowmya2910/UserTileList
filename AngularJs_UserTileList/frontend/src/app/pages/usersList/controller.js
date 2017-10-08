/* @ngInject */
export default class UsersList {
    constructor(usersService, $state) {
        this.usersService = usersService;
        this.state = $state;
    }

    $onInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.usersService.getData({}).then(response=> {
            this.users = response.data;
            console.log(this.users);
        });
    }

    getUser(id,evt) {
        evt.preventDefault();
        console.log(this.users[id]);
      //  localStorage.userinfo = this.users[id];
        this.state.go('index', {obj:this.users[id]})
    }
}
