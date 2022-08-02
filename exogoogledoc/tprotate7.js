const decalleTableauParK = function retourneTab(tableau = [],k){
    const newTableauRetourne = [];
    for(let i = 0;i<tableau.length;i++){
        if (tableau.length-k+i>=tableau.length){
            newTableauRetourne.push(tableau[i-k]);
            continue;
        }
        newTableauRetourne.push(tableau[tableau.length-k+i]);
    }
    return newTableauRetourne;
}
//0 1 2 3 4
//2 3 4 0 1


// correction 2 On vous donne un tableau d’entiers et un entier k qui représente le
//nombre de rotation que doit subir le tableau.
//Retourner le nouveau tableau après la rotation à droite.
function rotationTable(tableau,nbreDeRotations){
    const rotatedArray=[...tableau];
    let compteur=0;
    while(compteur<nbreDeRotations){
        let derniereValeur=rotatedArray.pop();
        rotatedArray.unshift(derniereValeur);
        compteur++;
    }
    return rotatedArray;
}
console.log(rotationTable([1,2,3,4],1))