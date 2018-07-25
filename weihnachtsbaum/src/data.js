const TreeData = {
    "ledRows": [
        {"leds": [{
            label: "html",
                parentId: 0,
                ownId: 1, buttonState : false,
                leds: []
        }]},
        {"leds": [{label: "head",parentId: 1, ownId: 11, buttonState : false}, {label: "body",parentId: 1, ownId: 12, buttonState : false}]},
        {"leds": [{label: "meta",parentId: 11, ownId: 111, buttonState : false}, {label: "link", parentId: 11, ownId: 112, buttonState : false}, {label: "p", parentId: 12, ownId: 121, buttonState : false},{label: "div", parentId: 12, ownId: 122, buttonState : false}]},
    ]
}

export default TreeData;