// final connect-4 game//

#include<stdio.h>
#include <conio.h>
#include <windows.h>


int checkWin(char array[]); // This Function cotrols is there any winner
void drawboard(char array[]); // This function basically draw our connect-4 board

/*
      GAME BOARD ARRAY INDEXES
| 1  | 2  | 3  | 4  | 5  | 6  | 7  |
| 8  | 9  | 10 | 11 | 12 | 13 | 14 |
| 15 | 16 | 17 | 18 | 19 | 20 | 21 |
| 22 | 23 | 24 | 25 | 26 | 27 | 28 |
| 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 36 | 37 | 38 | 39 | 40 | 41 | 42 |
------------------------------------
| 1  | 2  | 3  | 4  | 5  | 6  | 7  |
*/

int main() // Main function of the code includes board arrays and messages to player
{
    char board[43]; // game board is 6*7 and it needs 42 cells but we started our array from 1 so we have 43 cells
    board[0] = ' '; // we wanted to started from 1 instead of 0 for easier calculation
    int i, choice, check, player = 1;
    char sign; // game icon (X or O)
    int columns[7] = {36, 37, 38, 39, 40, 41, 42}; //this game start from most bottom cells and these are first cells of each columns
    

    for(i = 1; i <= 43; i++)
    {
        board[i] = ' ';
    }

    do
    {
        drawboard(board);
        player = (player % 2) ? 1 : 2; // decides the which player make a choice

        printf("Player %d, enter your choice : ",player);
        scanf("%d",&choice);
        sign = (player == 1) ? 'X' : 'O';

        if (choice == 1 && board[columns[0]] == ' ') //checks for player's choice and according to choice if the cell is empty put the icon
        {
            board[columns[0]]= sign; 
            columns[0] -=7; // after putting the icon in the cell we decrement this value by 7 because it jumps to upper cell for next move 
        }
            
        else if (choice == 2 && board[columns[1]] == ' ' )
        {
            board[columns[1]]= sign;
            columns[1] -=7;
        }
        else if (choice == 3 && board[columns[2]] == ' ' )
        {
            board[columns[2]]= sign;
            columns[2] -= 7;
        }
        else if (choice == 4 && board[columns[3]] == ' ' )
        {
            board[columns[3]]= sign;
            columns[3] -= 7;
        }
        else if (choice == 5 && board[columns[4]] == ' ' )
        {
            board[columns[4]]= sign;
            columns[4] -= 7;
        }
        else if (choice == 6 && board[columns[5]] == ' ' )
        {
            board[columns[5]]= sign;
            columns[5] -= 7;
        }
        else if (choice == 7 && board[columns[6]] == ' ' )
        {
            board[columns[6]]= sign;
            columns[6] -= 7;
        }
        else 
        {
            printf("!Invalid Entry!"); // if entered column is full or player entered except from 1 to 7 it gives an error
            getch(); // to keep error mesage on the terminal until clicking on any button
            player --; 
        }

        player ++;

    check = checkWin(board); // according to return value of this function game continues or ends

    } while (check == 1); 

    drawboard(board);
    player --;

    if(check == 0)
    {
        printf("\n\n!!! PLAYER %d WON !!!\n\n", player);
    }
    else if(check == 2)
    {
        printf("\n\n!!! GAME DRAW !!!\n\n");
    }
}

void drawboard(char array[])
{
    system("cls"); // clean the terminal for each loop to have a clear game environment
    int i =1;
    printf("\n\n   XXXX CONNECT - 4 OOOO\n\n");
    printf(" Player 1 (X) - Player 2 (O)\n\n");

    for(i=1; i<=42; i++)
    {
        printf("| %c ", array[i]); // draw the game board with array
        if((i) % 7 == 0)
        {
            printf("|\n");
        }
    }
    printf("-----------------------------\n");
    printf("| 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n\n");

}

int checkWin(char array[])
{
    int x, q, y, z, draw;
    int i, j;

    draw = 0;

    // Horizontal check for all possible options
    x = 1;
    q = 2;
    y = 3;
    z = 4; // these magic numbers are indexES numbers for game board array and first possible option for horizontal win

    for(i = 1; i <= 6; i++)
    {
        for(j = 1; j <= 4; j++)
        {
            if(array[x] == array[q] && array[q] == array[y] && array[y] == array[z] && array[x] != ' ' && array[q] != ' ' && array[y] != ' ' && array[z] != ' ')
            {
                return 0;
            }
            x ++;
            q ++;
            y ++;
            z ++; //increment all indexes by 1 to check one right possibilities
        }
        x += 3;
        q += 3;
        y += 3;
        z += 3; //increment all indexes by 3 to check one bottom possibilites
    }
    //End of horizontal check

    //Vertical check for all possible options
    x = 1;
    q = 8;
    y = 15;
    z = 22; // these magic numbers are indexes numbers for game board array and first possible option for vertical win

    for(i = 1; i <= 21; i++)
    {
        if(array[x] == array[q] && array[q] == array[y] && array[y] == array[z] && array[x] != ' ' && array[q] != ' ' && array[y] != ' ' && array[z] != ' ')
        {
            return 0;
        }
        x ++;
        q ++;
        y ++;
        z ++; //increment all indexes by 1 to check one right possibilities
    }
    //End of vertical check

    //Right diagonal check for all possible options
    x = 4;
    q = 10;
    y = 16;
    z = 22; // these magic numbers are indexes numbers for game board array and first possible option for right diagonal win

    for(i = 1; i <= 3; i++)
    {
        for(j = 1; j <= 4; j++)
        {
            if(array[x] == array[q] && array[q] == array[y] && array[y] == array[z] && array[x] != ' ' && array[q] != ' ' && array[y] != ' ' && array[z] != ' ')
            {
                return 0;
            }
            x ++;
            q ++;
            y ++;
            z ++; //increment all indexes by 1 to check one right possibilities
        }
        x += 3;
        q += 3;
        y += 3;
        z += 3; //increment all indexes by 3 to check one bottom possibilites
    }
    //End of right diagonal check

    //Left diagonal check for all possible options
    x = 1;
    q = 9;
    y = 17;
    z = 25; // these magic numbers are indexes numbers for game board array and first possible option for left diagonal win

    for(i = 1; i <= 3; i++)
    {
        for(j = 1; j <= 4; j++)
        {
            if(array[x] == array[q] && array[q] == array[y] && array[y] == array[z] && array[x] != ' ' && array[q] != ' ' && array[y] != ' ' && array[z] != ' ')
            {
                return 0;
            }
            x ++;
            q ++;
            y ++;
            z ++; //increment all indexes by 1 to check one right possibilities
        }
        x += 3;
        q += 3;
        y += 3;
        z += 3; //increment all indexes by 3 to check one bottom possibilites
    }
    //End of left diagonal check

    //Draw check
    for(i = 1; i<=42; i++)
    {
        if(array[i] != ' ') //if other possibilities have not materialized and all cells are full it menas there is no winner 
        {
            draw ++;
        }
    }

    if(draw == 42)
    {
        return 2;
    }
    //End of the draw check

    return 1; // if the all cells are not full and there is no winner yet it means the game will continues
}