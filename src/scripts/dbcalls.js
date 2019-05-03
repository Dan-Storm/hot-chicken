const apiBaseURL = "http://localhost:8088";

const getAllChickens = () => {
    return fetch(`${apiBaseURL}/chicken`)
    .then(response => response.json())
    .then(parsedResult => {
        // console.log("all the chickens: ", parsedResult);
        return parsedResult;
    });
};

const getOneChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`)
    .then(response => response.json())
    .then(parsedResult => {
        console.log("one chicken: ", parsedResult);
    });
};

const updateChicken = (chickenId, chickenObj) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`,
    {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(chickenObj)
    }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("updated chicken", parsedResult);
    });
};

const makeChicken = (chickenObj) => {
    fetch(`${apiBaseURL}/chicken/`,
    {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(chickenObj)
    }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("updated chicken", parsedResult);
    });
};

const deleteChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`,
    {
        method: "DELETE",
    }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("deleted chicken", parsedResult);
});
}

const testChickenObj = {
    "name": "Gary",
    "gender": "male",
    "color": "yellow",
    "spicelevel": "4"
}

const newChickenObj = {
    "name": "Cluckies Bride",
    "gender": "male",
    "color": "black",
    "spicelevel": "4"
}

//makeChicken(newChickenObj);
getAllChickens();
// deleteChicken(2);
// getOneChicken(3);
// updateChicken(2, testChickenObj);
