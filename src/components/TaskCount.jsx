function TaskCount({toBeCount}) {
    return (
        <div className="taskcount container">
            <h1>Task Count {toBeCount.length}</h1>
        </div>
    );
}

// TaskCount.defaultProps = {
//    toBeShown: []
//}

export default TaskCount;