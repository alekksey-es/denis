import {makeAutoObservable} from "mobx";


export default class ProductStore{


    constructor() {
        this._types = [
            {id: 1, name: 'Коньки'},
            {id: 2, name: 'Клюшки'}
        ]
        this._brands = [
            {id: 1, name: 'Bauer'},
            {id: 2, name: 'CCM'}
        ]
        this._tools = [
            {id: 1, name: 'Клюшка композитная HS SUPER TACKS AS4 PRO SR', price: 12300, rating: 5, img:'https://ccm.ru/upload/iblock/a70/lddbbfsp8yrbht63co5ksc6e93gq3g43/CCM-Super-Tacks-AS4-Pro-Grip-Senior-Hockey-Stick.jpg'},
            {id: 2, name: 'Клюшка композитная HS JETSPEED 475 JR', price: 12400, rating: 4.2, img: 'https://ccm.ru/upload/iblock/6bd/RibCor-Trigger-5-Pro-Grip-Senior-Hockey-Stick-2.png' },
            {id: 3, name: 'Клюшка композитная HS JETSPEED 475 SR', price: 10220, rating: 4, img:'https://ccm.ru/upload/iblock/526/HS-JETSPEED-475-_6_.jpg'},
            {id: 4, name: 'Клюшка композитная HS JETSPEED 465 JR', price: 9500, rating: 3.5, img: 'https://ccm.ru/upload/iblock/c3b/HS-JETSPEED-465-JR-_6_.jpg'}
        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setTools(tools){
        this._tools = tools
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get tools(){
        return this._tools
    }
}