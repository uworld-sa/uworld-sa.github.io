import ListModel from '../model/model';
import FormView from '../view/form';
import ListView from '../view/list';
import EventEmitter from '../EventEmitter';

export default class ListController  extends EventEmitter {
    constructor(rootElement) {
        super();
        this._root = rootElement;

        let json = localStorage.getItem(rootElement.id);
        let items = [];

        if (json !== undefined) {
            items = JSON.parse(json);
        }

        this._model = new ListModel(items,this._root);

        this._formView = new FormView(this._model, this._root);

        this._listView = new ListView(this._model, this._root);

        this._listView.on('itemCheckboxChange', item => {
            this._model.checkedItem(item, !item.checked);
        });
        this._listView.on('itemEditClick', (data) => {
            this._model.editItem(data);
        });
        this._listView.on('itemDeleteClick', item => {
            this._model.removeItem(item);
        });
        this._listView.on('itemDrag', (data) => {
            this._model.itemDrag(data);
        });
        this._formView.on('formSubmit', (data) => {
            this._model.addItem(data);
        })
        this._formView.on('reverseList', () => {
            this._model.reverseAll();
        });
        this._formView.on('removeAllItem', () => {
            this._model.removeAll();
        });
    }
}