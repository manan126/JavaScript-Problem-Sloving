function solveQuadratic(a, b, c) {
   
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return "No real roots";
    }
    
    
    let sqrtDiscriminant = Math.sqrt(discriminant);

   
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);


    return [root1, root2];
}


let a = 1, b = -3, c = 2;
let roots = solveQuadratic(a, b, c);

console.log(`Roots of the equation ${a}x^2 + ${b}x + ${c} = 0 are: ${roots}`);
