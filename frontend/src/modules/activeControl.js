import {promise} from "./promise";

export const removeActive = (containerName) => {
    const containers = document.getElementsByClassName(containerName);
    [...containers].forEach(container => {
        container.classList.remove('active');
    })
}

export const addActiveById = (target, containerId) => {
    const container = findParentNode(target, containerId);
    container.classList.remove('hide')
    container.classList.add('active')
}

export const addActiveByName = (name) => {
    const container = document.getElementsByName(name)[0];
    container.classList.remove('hide');
    container.classList.add('active')
}

export const toggleActiveByName = (containerName, name) => {
    removeActive(containerName);
    addActiveByName(name);
}

export const addHideById = (target, containerId) => {
    const parent = findParentNode(target, containerId);

    promise().then(() => {
        parent.classList.remove('active')
        parent.classList.add('hide');
    })
}


export const findParentNode = (target, findName) => {
    let returnTarget = target;
    while (returnTarget.getAttribute('id') !== findName) {
        returnTarget = returnTarget.parentNode;
    }

    return returnTarget
}