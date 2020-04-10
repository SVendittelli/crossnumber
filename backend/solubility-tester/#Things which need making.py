#Things which need making  
#Function which makes a list of equivalent squares  
#Function which converts clues to rules 
#Solvability coefficients need to be determined for each clue and a function written to output an estimation of the likelihood of being solvable, the "solvability score" for each square.  
#Function for solving – I think it should go like this:  
#List_of_unsolved_squares = a list of all the squares 
#Tot_Unsolved = len(List_of_unsolved_squares) #Tot_Unsolved is the number of unsolved squares 
#Determine each square's solvability score using function above.  
#While Tot_Unsolved >0,  
#Rank unsolved squares by solvability score 
#Attempt to solve top rank square, output all possible answers to clues as list and all possible values in square as set (intersection of the various values for the equivalent squares from each clue). If set only contains one item, save that as final solution and remove that square from List_of_unsolved_squares  
#Update the clues acting on other squares next to this one based on possible solutions 
#(maybe do something here to ensure the same square doesn't get top ranked again, like give it a negative to the solvability coefficient?) 
#Recalculate solvability scores 
#Tot_Unsolved = len(List_of_unsolved_squares) 

#Evaluate_solubility needs to be a function which takes a list of squares and performs functions of their solubility coefficients to determine a solubility score for each - maybe a dictionary? can you rank dictionaries by their values? 


Def Solve_squares(List_of_unsolved_squares):
 Tot_unsolved = len(List_of_unsolved_squares)
    Evaluate_solubility(List_of_unsolved_squares)
    While Tot_unsolved>0:
        #Somehow rank the output of evaluate solubility 
        #Take top soluble, output list of answers to clues, split and convert this into lists of answers for squares from each clue, convert to set of answers for each clue, work out intersection of clues and therefore set of possible answers.
        #output final list of possible solutions for square
        #update clues for neighbouring squares - must be in set 7,8,9 
        #update list_of_unsolved_squares
        #somehow edit that squares solubility score to keep it downranked for a while - maybe a flag? 
        Evaluate_solubility(List_of_unsolved_squares)
        Tot_unsolved=len(List_of_unsolved_squares)

Solve_squares(List_of_unsolved_squares)