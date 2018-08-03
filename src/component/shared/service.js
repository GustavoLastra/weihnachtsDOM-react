import InitialledList from "../../data.js"


const TreeService = {

    getTree(){
        return InitialledList;
    },
    update(id, newButtonState){
        console.log("TreeService update id: " + id + "newButtonState: " + newButtonState);
    }
}

export default TreeService;