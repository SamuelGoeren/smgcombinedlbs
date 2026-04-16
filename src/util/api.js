import { formatISO8601Duration } from "./utils";

/*
    gets entire leaderboard data for category
*/
export async function fetchLbData(endpoint, params) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoint}?${queryString}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
        }
        const res = await response.json();
        return res;
        
    } catch (error) {
    }
}

/*
    returns array of objects [place, username, time, mode, date] for specified category
    represents leaderboard
    each subarray will be a line in the csv export
*/
export async function getLbDataReduced(endpoint, params, modeData) {
    let lb = [];
    const res = await fetchLbData(endpoint, params);
    let playerIndex = 0;
    let unknownPlayers = false;
    let previousTime = null;
    let placeCounter = 0;
    let previousPlace = 1;

    let seenRunners = new Set();

    if (res && res.data && res.data.runs) {
        for(const pos of res.data.runs){
            const weblink = pos.run.weblink;
            const playerObj = pos.run.players[0];
            let username = "unknown player";
            let userId = playerObj.id;

            if(playerObj.rel === "user"){
                username = res.data.players.data[playerIndex].names.international;
            }
            else if(playerObj.rel === "guest"){
                username = pos.run.players[0].name;
            }
            else{
                console.warn(`Unknown user on place ${playerIndex + 1}`);
                unknownPlayers = true;
            }

            if (seenRunners.has(userId)) {
                playerIndex++;
                continue;
            }
            seenRunners.add(userId);
            placeCounter++;

            let date = pos.run.date;
            if(date === null){
                date = pos.run.submitted.split("T")[0];
            }

            const modeId = pos.run.values[modeData.id];
            const mode = modeData[modeId];

            const currentTime = formatISO8601Duration(pos.run.times.primary);

            let place;
            if (previousTime !== null && currentTime === previousTime) {
                place = previousPlace;
            } else {
                place = placeCounter;
                previousPlace = place;
                previousTime = currentTime;
            }
        
            lb.push(
                {
                    "place": place, 
                    "runner" : username, 
                    "time" : currentTime,
                    "mode" : mode, 
                    "date" : date,
                    "weblink" : weblink
                }
            );

            playerIndex++;
        };
    }

    if(unknownPlayers){
        console.warn("Some players will be marked as \"unknown\" because they might have deleted their speedrun.com account.");
    }

    return lb;
}