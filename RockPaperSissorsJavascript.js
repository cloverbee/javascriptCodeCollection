/*
SVB Lunch meeting:
Number of wins for each player in a series of Rock-Paper-Scissor game

Two players are playing a series of games of Rock–paper–scissors. There are a total of K games played. Player 1 has a sequence of moves denoted by string A and similarly player 2 has string B. If any player reaches the end of their string, they move back to the start of the string. The task is to count the number of games won by each of the player when exactly K games are being played.

Input: k = 4, a = “SR”, b = “R”
Output: 0 2
Game 1: Player1 = S, Player2 = R, Winner = Player2
Game 2: Player1 = R, Player2 = R, Winner = Draw
Game 3: Player1 = S, Player2 = R, Winner = Player2
Game 4: Player1 = R, Player2 = R, Winner = Draw
*/
function RPS(K, a, b){

    let dict = {'S':"P", "P":"R", "R":"S"};
    let arra = a.repeat(Math.floor(K/a.length)) + ((K % a.length)?a.slice(0, K % a.length):'');
    console.log(arra);
    let arrb = b.repeat(Math.floor(K/b.length)) + ((K % b.length)?b.slice(0, K%b.length):"");
    console.log(arrb);
    let cnta = 0, cntb = 0;
    for(let i = 0; i < K; i++){
        if(arra[i] === arrb[i]){
            continue;
        }
        else if(arra[i] === dict[arrb[i]]){
            cntb += 1;
        }
        else{
            cnta += 1;
        }
    }
    return [cnta, cntb];

}
console.log( RPS(4, 'SR', 'R') ) ;