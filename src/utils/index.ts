import { Options } from "../types"

export const increaseDifficulty = (data: string[][]) => {
    if(data[0][0] === Options.BALL && data[0][1] === Options.BALL && data[0][2].length === 0) {
        return {
            line: 0,
            column: 2,
        }
    }

    if(data[1][0] === Options.BALL && data[1][1] === Options.BALL && data[1][2].length === 0) {
        return {
            line: 1,
            column: 2,
        }
    }

    if(data[2][0] === Options.BALL && data[2][1] === Options.BALL && data[2][2].length === 0) {
        return {
            line: 2,
            column: 2,
        }
    }

    


    if(data[0][0] === Options.BALL && data[0][2] === Options.BALL && data[0][1].length === 0) {
        return {
            line: 0,
            column: 1,
        }
    }

    if(data[1][0] === Options.BALL && data[1][2] === Options.BALL && data[1][1].length === 0) {
        return {
            line: 1,
            column: 1,
        }
    }

    if(data[2][0] === Options.BALL && data[2][2] === Options.BALL && data[2][1].length === 0) {
        return {
            line: 2,
            column: 1,
        }
    }


    if(data[0][2] === Options.BALL && data[0][1] === Options.BALL && data[0][0].length === 0) {
        return {
            line: 0,
            column: 0,
        }
    }

    if(data[1][2] === Options.BALL && data[1][1] === Options.BALL && data[1][0].length === 0) {
        return {
            line: 1,
            column: 0,
        }
    }

    if(data[2][2] === Options.BALL && data[2][1] === Options.BALL && data[2][0].length === 0) {
        return {
            column: 0,
            line: 2,
        }
    }





    if(data[0][1] === Options.BALL && data[0][0] === Options.BALL && data[0][2].length === 0) {
        return {
            line: 0,
            column: 2,
        }
    }

    if(data[1][1] === Options.BALL && data[1][0] === Options.BALL && data[1][2].length === 0) {
        return {
            line: 1,
            column: 2,
        }
    }

    if(data[2][1] === Options.BALL && data[2][0] === Options.BALL && data[2][2].length === 0) {
        return {
            line: 2,
            column: 2,
        }
    }













    if(data[0][0] === Options.BALL && data[1][0] === Options.BALL && data[2][0].length === 0) {
        return {
            line: 2,
            column: 0,
        }
    }

    if(data[0][1] === Options.BALL && data[1][1] === Options.BALL && data[2][1].length === 0) {
        return {
            line: 2,
            column: 1,
        }
    }

    if(data[0][2] === Options.BALL && data[1][2] === Options.BALL && data[2][2].length === 0) {
        return {
            line: 2,
            column: 2,
        }
    }

    




    if(data[2][0] === Options.BALL && data[1][0] === Options.BALL && data[0][0].length === 0) {
        return {
            line: 0,
            column: 0,
        }
    }

    if(data[2][1] === Options.BALL && data[1][1] === Options.BALL && data[0][1].length === 0) {
        return {
            line: 0,
            column: 1,
        }
    }

    if(data[2][2] === Options.BALL && data[1][2] === Options.BALL && data[0][2].length === 0) {
        return {
            line: 0,
            column: 2,
        }
    }







    if(data[0][0] === Options.BALL && data[1][1] === Options.BALL && data[2][2].length === 0) {
        return {
            line: 2,
            column: 2,
        }
    }

    if(data[0][2] === Options.BALL && data[1][1] === Options.BALL && data[2][0].length === 0) {
        return {
            line: 2,
            column: 0,
        }
    }

    if(data[2][2] === Options.BALL && data[1][2] === Options.BALL && data[0][2].length === 0) {
        return {
            line: 0,
            column: 2,
        }
    }


    













    if(data[0][0] === Options.BALL && data[2][0] === Options.BALL && data[1][0].length === 0) {
        return {
            line: 1,
            column: 0,
        }
    }

    if(data[0][1] === Options.BALL && data[2][1] === Options.BALL && data[1][1].length === 0) {
        return {
            line: 1,
            column: 1,
        }
    }

    if(data[0][2] === Options.BALL && data[2][2] === Options.BALL && data[1][2].length === 0) {
        return {
            line: 1,
            column: 2,
        }
    }






    if(data[0][0] === Options.BALL && data[1][1] === Options.BALL && data[2][2].length === 0) {
        return {
            line: 2,
            column: 2,
        }
    }

    if(data[0][0] === Options.BALL && data[2][2] === Options.BALL && data[1][1].length === 0) {
        return {
            line: 1,
            column: 1,
        }
    }

    if(data[2][2] === Options.BALL && data[1][1] === Options.BALL && data[0][0].length === 0) {
        return {
            line: 0,
            column: 0,
        }
    }




    if(data[0][2] === Options.BALL && data[1][1] === Options.BALL && data[2][0].length === 0) {
        return {
            line: 2,
            column: 0,
        }
    }

    if(data[0][2] === Options.BALL && data[2][0] === Options.BALL && data[1][1].length === 0) {
        return {
            line: 1,
            column: 1,
        }
    }

    if(data[2][0] === Options.BALL && data[1][1] === Options.BALL && data[0][2].length === 0) {
        return {
            line: 0,
            column: 2,
        }
    }

    if(data[0][0] === Options.X && data[0][1] === Options.X && data[0][2].length === 0) {
        return {
            line: 0,
            column: 2,
        }
    }

    if(data[0][2] === Options.X && data[0][0] === Options.X && data[0][1].length === 0) {
        return {
            line: 0,
            column: 1,
        }
    }

    if(data[0][2] === Options.X && data[0][1] === Options.X && data[0][0].length === 0) {
        return {
            line: 0,
            column: 0,
        }
    }


    return {
        line: false,
        column: false, 
    }
}