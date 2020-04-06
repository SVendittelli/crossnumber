# Rikki 6/4/20
# 1 2
# 6 4
def test_grid_2_2():
    return {
    "metadata": {"width": 2,"height": 2},
    "clues": [
                {
                    "id": "1","direction": "down","text": "A 2 digit square","properties": ["square"],
                    "cells": [{"row": 0,"column": 0},{"row": 1,"column": 0}]
                },
                {
                    "id": "2","direction": "down","text": "A multiple of 3","properties": ["multiple"],
                    "cells": [{"row": 0,"column": 1},{"row": 1,"column": 1}]
                },
                {
                    "id": "3","direction": "across","text": "A multiple of 6","properties": ["multiple"],
                    "cells": [{"row": 0,"column": 0},{"row": 0,"column": 1}]
                },
                {
                    "id": "4","direction": "across","text": "A power of 2","properties": ["power"],
                    "cells": [{"row": 1,"column": 0},{"row": 1,"column": 1}]
                }
            ]
        }
# Rikki 6/4/20
# 1 2 1
# 6 1 9
def test_grid_2_3():
    return {
    "metadata": {"width": 3,"height": 2},
    "clues": [
                {
                    "id": "1","direction": "across","text": "Palindromic multiple of 11","properties": ["palindrome","multiple"],
                    "cells": [{"row": 0,"column": 0},{"row": 0,"column": 1},{"row": 0,"column": 2}]
                },
                {
                    "id": "2","direction": "down","text": "2 digit prime","properties": ["prime"],
                    "cells": [{"row": 0,"column": 2},{"row": 1,"column": 2}]
                },
                {
                    "id": "3","direction": "down","text": "Multiple of 7","properties": ["multiple"],
                    "cells": [{"row": 0,"column": 1},{"row": 1,"column": 1}]
                },
                {
                    "id": "4","direction": "across","text": "Digit sum of 10","properties": ["digitsum"],
                    "cells": [{"row": 1,"column": 1},{"row": 1,"column": 2}]
                },
                {
                    "id": "5","direction": "down","text": "A power of 4","properties": ["power"],
                    "cells": [{"row": 0,"column": 0},{"row": 1,"column": 0}]
                }
            ]
        }
