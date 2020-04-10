#simulation - this is something which works out how many possible answers there are to the clue combination
#To use run Simulation(lower,upper) where lower and upper are the lowest and highest numbers you're interested in, e.g for 2 digit numbers 10, 99. 
# This currently only works for a limited number of clues - multiple of x, palindromic numbers, fibonacci numbers, odd/even and primes 
# Where double clues are included, they have to be comma separated for this to work. 


import math 
#rule = "palindrome"

def Multiple(div,a):
    return (a%div == 0)

def Palindrome(a):
    return (str(a) == str(a)[::-1])

def PerfectSquare(x): 
    s = int(math.sqrt(x)) 
    return s*s == x 

def Fibonacci(a):
    return PerfectSquare(5*a*a + 4) or PerfectSquare(5*a*a - 4) 

def Power(n,a):
    pow = int (math.log(a, n) + 0.5)
    return pow**n == a

def Prime(a):
    a = int(a)
    if a == 1:
        return False
    for i in range (2,((int(a**0.5))+1)):
        if a%i == 0:
            return False
    return True

def Rulefun2(rule,a):
    if "multiple" in rule:
            #this bit works if part of the rule is a multiple of something
        rule = rule.lstrip()
        Multlist = rule.split(" ")
        div = int(Multlist[1])
        return (Multiple(div,a))
    if "even" in rule:
        return (Multiple(2,a))
    if "odd" in rule: 
        return not (Multiple(2,a))
    if "palindrome" in rule:
        return Palindrome(a)
    if "fibonacci" in rule:
        return Fibonacci(a)
    if "power" in rule: # This doesn't work yet
        pos = rule.find("power")
        rule = int(rule[(pos+6)])
        return Power(rule,a)
    if "prime" in rule:
        return Prime(a)

def Rulefun(rule,a):
#This is a function which turns the rule into something my simulation function can use
    if "," not in rule: # This works for single clues
        return Rulefun2(rule,a)
    if "," in rule: # This works for combo clues
        Listofrules = rule.split(",")
        #print (Listofrules)
        l = len(Listofrules)
        Listofresults=[]
        for i in range (0,l):
            Listofresults.append(Rulefun2(Listofrules[i],a))
        return(all(Listofresults))


def Simulation(lower, upper, rule):
    Possible_solutions = 0
    for a in range (lower,(upper+1)):
        if Rulefun(rule,a):
            Possible_solutions = Possible_solutions + 1
    print (Possible_solutions)
    print (Possible_solutions/(upper-lower))

#Simulation(10,99, "palindrome")