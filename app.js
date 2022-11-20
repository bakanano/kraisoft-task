let parentDiv = document.querySelector(".parent");
let parentRect = parentDiv.getBoundingClientRect();

let childDiv = document.querySelector(".child");
let childRect = childDiv.getBoundingClientRect();

const dragging = () => {

    const stop = () => {
        document.onmousemove = null;
    }

    const start = (e) => {
        e.preventDefault();
        document.onmouseup = stop;
        document.onmousemove = drag;
    }

    childDiv.onmousemove = start;

    const drag = (e) => {
        e.preventDefault();
        
        let horizontal = e.clientX;
        let vertical  = e.clientY;

        //parent div coordinates
        let parentLeft = parentRect.left;
        let parentRight = parentRect.right;
        let parentTop = parentRect.top;
        let parentBottom = parentRect.bottom;
        
        //child div size
        let chidldHeight = childRect.height;
        let childWidth = childRect.width; 

        if (horizontal >= parentLeft && 
        (horizontal + childWidth <= parentRight) &&
        vertical >= parentTop &&
        (vertical + chidldHeight <= parentBottom)) {

            childDiv.style.left = `${e.clientX}px`;
            childDiv.style.top = `${e.clientY}px`;
        }
    }
}

dragging(parentDiv, childDiv);