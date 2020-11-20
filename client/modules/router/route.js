export default class Route{
    constructor(path, component, rootQuery, data){
        this.path = path;
        this.component = component;
        this.rootQuery = rootQuery;
        this.data = data;
    }
    render(){
        let root = document.querySelector(this.rootQuery);
        root.innerHTML = '';
        root.append(new this.component(this.data).render());
    }
}