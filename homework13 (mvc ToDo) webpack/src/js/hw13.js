import ListController from './todo/controller/list';

document.addEventListener('DOMContentLoaded', function documentReady() {
    new ListController(document.getElementById('buy-list'));
});