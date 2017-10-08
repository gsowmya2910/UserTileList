/* @ngInject */
export default class ChosenUser {
    constructor($stateParams) {
        this.userDetails = 'nodata';
        this.params  = $stateParams;
    }

    $onInit() {
        //console.log(localStorage.userinfo);
        console.log(this.params.obj);
        this.userDetails = this.params.obj;
    }
}
