import  TodoDisplay from "./TodoDisplay";
// import { v4 } from "uuid";

function TodoList({toBeShown,deletedHandler,crossed}) {
    return (
        <div className="container">
            {toBeShown.map((item) => <TodoDisplay deletedHandler={deletedHandler} key={item.id} beShown={item}/>)}
        </div>
    );
}
export default TodoList;