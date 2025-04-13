export const SRC_BASE_URL = 'https://www.speedrun.com/api/v1';
export const TABLE_HEADER = ["Place", "Runner", "Time", "Mode",  "Date"]

export const GAME_DATA = {
    smg1 : {
        id: "pd0wg21e",
        categories : {
            any : {
                name : "any%",
                id: "zd365vdn",
                characters: {
                    id : "var-kn0m3zl3",
                    mario: "4lxrr2l2",
                    luigi: "814880ld"
                }
            },
            "120" : {
                name : "120 Stars",
                id : "rklq0n2n",
                characters: {
                    id : "var-ql61m789",
                    mario: "z1966014",
                    luigi: "p12rr7lx"
                }
            },
            "242" : {
                name : "242 Stars",
                id : "wkplz02r"
            }
        },
        modes : {
            id : "r0nwg08q",
            "y4lxp4q2" :"1p",
            "g0q5n2qp" : "2p"
        },
        categoryOrder : ["any", "120", "242"]
    },

    smg2 : {
        id : "kdkzlgdm",
        categories : {
            any : {
                name : "any%",
                id : "wk67rxd1"
            },
            "120" : {
                name : "120 Stars",
                id : "n2y5r8ko"
            },
            "greens" : {
                name : "Green Stars",
                id : "w20mnzkn"
            },
            "242" : {
                name : "242 Stars",
                id : "7kjplxk3"
            }
        },
        modes : {
            id : "jlz5e5l2",
            "mln37nqp" : "1p",
            "8107yplv" : "2p" 
        },
        categoryOrder : ["any", "120", "greens", "242"]
    }
}