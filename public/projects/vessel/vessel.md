# Vessel_Interpreter ⭐
A self crafted Tree Walk Interpreter named Vessel inspired from Hollow Knight

---

## What is Vessel?
Vessel is a Tree walk interpreter which reads a custom language made just for vessel line by line and breaks them into keywords and tokens to make a abstract syntax tree. After that's done, the interpreter simply walks over the abstract tree, solving each part of the code token by token thus giving an output.

## Stack used :
- Java
- C

## Vessel Syntax :
Vessel is very much based on python, C and Javascript so there can be many resemblances

- Vessel is a dynamic language thus there is no need to declare variable types, thus a variable is declared as:

```bash
var num = 5;
```
Do not forget to put semicolon at the end

- Printing a statement or variable:
```bash
print "your_name";
print num1 + num2;
```

- If-else statements:
```bash
if(pi == 3.14)
{
  // statement
}
else
{
  // statement
}
```

- And and Or logical operators:
```bash
if(conditionA and conditionB)
{
  // statement
}
if(conditionA or conditionB)
{
  // statement
}
```

- Loops:
Vessel has only a while loop and a for loop and the syntax is almost similar to C
```bash
while(condition)
{
  // statements
}

for(var i = 0; i < n; i = i + 1)
{
  // statements
}
```
Vessel currently does not have the ++ or -- operators so one has to use the ancient methods 

- Functions:
```bash
fun say_gex(a, b, c)
{
  return a + b + c;
}
```

---

Crafted by following the book 'Crafting Interpreters' by Robert Nystrom