// YOUR CODE BELOW
function cloneMachine(parent) {
    let child = { ...parent };
    
    child.name= parent.name + 'Clone';
    child.offspring = [];
    parent.offspring.push(child.name);

    return child;
}
