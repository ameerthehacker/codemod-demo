// actual code
const c = a + 5;

// after coversion to tree
let sourceCode = {
  program: {
    variableDeclarations: [
      {
        identifier: {
          name: "c"
        },
        value: {
          expression: {
            binaryExpression: {
              leftOperand: {
                identifier: {
                  name: "b"
                }
              },
              operator: "+",
              rightOperand: {
                literal: {
                  value: "5"
                }
              }
            }
          }
        }
      }
    ]
  }
}

// change the variable name
sourceCode.program.variableDeclarations[0].identifier.name = "myNewVariableName";
// change the expression
sourceCode.program.variableDeclarations[0].value.expression.binaryExpression.rightOperand = 10;

// after modifying the tree

{
  program: {
    variableDeclarations: [
      {
        identifier: {
          name: "myNewVariableName"
        },
        value: {
          expression: {
            binaryExpression: {
              leftOperand: {
                identifier: {
                  name: "b"
                }
              },
              operator: "+",
              rightOperand: {
                literal: {
                  value: "10"
                }
              }
            }
          }
        }
      }
    ]
  }
}

// back to code
const myNewVariableName = a + 10;
