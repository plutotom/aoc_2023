# aoc_2023

Some helpful bash or zsh tools

```
# Add these to your ~/.zshrc

AOC="~/Documents/Coding/AOC-2023" # remember to change this to whatever your AOC directory is
AOC_COOKIE="" # get this from the cookies tab in network tools on the AOC website: F12 -> Applacation -> cookies -> https://adventofcode.com -> session


alias aos="cd $AOC; bun solution.js in.txt" # Runs solution.js with in.txt as input
alias aot="cd $AOC; bun solution.js test.txt"
alias aoc="aot; echo; aos"

# Gets data from aoc using your token.
# @example aoc-load 2023 2 # get input data from 2023 day 2.
# part 1 and part 2 use the same input.
function aoc-load () {
    if [ $1 ]
    then
        curl --cookie "session=$AOC_COOKIE" "https://adventofcode.com/$1/day/$2/input" > in.txt
    else
        curl --cookie "session=$AOC_COOKIE" "$(date +https://adventofcode.com/%Y/day/%d/input)" > in.txt
    fi
}
```
