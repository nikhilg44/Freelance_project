# Python program to illustrate functions
# Functions can return another function
 
def create_adder(x):
    print(x)
    def adder(y):
        print(y)
        return x+y
    return adder
 
add_15 = create_adder(15)
 
print(add_15(10))
