// Defenicion de los métodos array
const examples = [
    // 1. at()
    {
        method: "Array.prototype.at()",
        description: "Accede al elemento que quieras",
        example: 'let array = [10, 20, 30, 40, 50];\n// array.at(1) -> 20\n// array.at(-1) -> 50',
        execute: () => {
            let array = [11, 24, 38, 62, 70];
            return `Índice 1: ${array.at(1)}, Índice -1: ${array.at(-1)}`;
        }
    },
    // 2. concat()
    {
        method: "Array.prototype.concat()",
        description: "Combina y envia uno nuevo sin modificar el anterior.",
        example: 'let array1 = [10, 20, 30, 40, 50];\nlet extra = [60, 70];\nlet combinado = array1.concat(extra);',
        execute: () => {
            let array = [10, 20, 30, 40, 50];
            let extra = [60, 70];
            return array.concat(extra);
        }
    },
    // 3. copyWithin()
    {
        method: "Array.prototype.copyWithin()",
        description: "Copia una parte del array pegandolo en él mismo (array.copyWithin(destino, inicio, fin?))",
        example: 'let array = [10, 20, 30, 40, 50];\narray.copyWithin(0, 3);\n// Copia desde índice 3 (40) al inicio (índice 0).',
        execute: () => {
            let array = [10, 20, 30, 40, 50];
            array.copyWithin(0, 3);
            return array;
        }
    },
    // 4. entries()
    {
        method: "Array.prototype.entries()",
        description: "Devuelve un nuevo iterador",
        example: 'let array = [40, 50, 30, 40, 50];\nlet iterator = array.entries();\n// Iterar sobre el iterador...',
        execute: () => {
            let array = [40, 50, 30, 40, 50]; 
            let iterator = array.entries();
            let result = [];
            for (const entry of iterator) {
                result.push(entry);
            }
            return result; // Muestra los pares 
        }
    },
    // 5. every()
    {
        method: "Array.prototype.every()",
        description: "Verifica si todos los elementos del array",
        example: 'let array = [40, 50, 30, 40, 50];\narray.every(n => n > 20); // false',
        execute: () => {
            let array = [40, 50, 30, 40, 50]; 
            return array.every(n => n > 20);
        }
    },
    // 6. fill()
    {
        method: "Array.prototype.fill()",
        description: "Rellena devolviendo un valor estático",
        example: 'let array = [40, 50, 30, 40, 50];\narray.fill(0, 1, 3); // Rellena con 0, desde índice 1 (incluido) hasta 3 (excluido).',
        execute: () => {
            let array = [40, 50, 30, 40, 50];
            array.fill(0, 1, 3);
            return array;
        }
    },
    // 7. filter()
    {
        method: "Array.prototype.filter()",
        description: "Crea un nuevo array con todos los elementos que cumplan la condición",
        example: 'let array = [40, 0, 0, 40, 50];\nlet filtrado = array.filter(n => n > 30);',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.filter(n => n > 30);
        }
    },
    // 8. find()
    {
        method: "Array.prototype.find()",
        description: "Devuelve el primer elemento del array",
        example: 'let array = [40, 0, 0, 40, 50];\narray.find(n => n > 30); // Devuelve 40 (el primero que encuentra)',
        execute: () => {
            let array = [40, 0, 0, 40, 50]; 
            return array.find(n => n > 30);
        }
    },
    // 9. findIndex()
    {
        method: "Array.prototype.findIndex()",
        description: "Devuelve el índice del primer elemento",
        example: 'let array = [40, 0, 0, 40, 50];\narray.findIndex(n => n > 30); // Devuelve 0',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.findIndex(n => n > 30);
        }
    },
    // 10. findLast()
    {
        method: "Array.prototype.findLast()",
        description: "Devuelve el último elemento del array",
        example: 'let array = [40, 0, 0, 40, 50];\narray.findLast(n => n > 30); // Devuelve 50',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.findLast(n => n > 30);
        }
    },
    // 11. findLastIndex()
    {
        method: "Array.prototype.findLastIndex()",
        description: "Devuelve el índice del último elemento del array",
        example: 'let array = [40, 0, 0, 40, 50];\narray.findLastIndex(n => n > 30); // Devuelve 4',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.findLastIndex(n => n > 30);
        }
    },
    // 12. flat()
    {
        method: "Array.prototype.flat()",
        description: "Crea un nuevo array con todos los elementos hasta la posición indicada.",
        example: 'let nested = [1, [2, [3, 4]]];\nnested.flat(2); // [1, 2, 3, 4]',
        execute: () => {
            let nested = [1, [2, [3, 4]]];
            return nested.flat(2);
        }
    },
    // 13. flatMap()
    {
        method: "Array.prototype.flatMap()",
        description: "Aplica una función e indica el elemento",
        example: 'let duplicados = [1, 2, 3];\nduplicados.flatMap(n => [n, n * 2]) // [1, 2, 2, 4, 3, 6]',
        execute: () => {
            let duplicados = [1, 2, 3];
            return duplicados.flatMap(n => [n, n * 2]);
        }
    },
    // 14. forEach()
    {
        method: "Array.prototype.forEach()",
        description: "Ejecuta una función proporcionada por algun elemento",
        example: 'let array = [40, 0, 0, 40, 50];\narray.forEach(n => console.log(n));',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            let log = [];
            array.forEach(n => log.push(n));
            return `Recorrido: ${log.join(', ')}`;
        }
    },
    // 15. includes()
    {
        method: "Array.prototype.includes()",
        description: "Determina si un array incluye el valor indicado",
        example: 'let array = [40, 0, 0, 40, 50];\narray.includes(40); // true',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.includes(40);
        }
    },
    // 16. indexOf()
    {
        method: "Array.prototype.indexOf()",
        description: "Devuelve el primer índice en el que se puede encontrar cierto elemento",
        example: 'let array = [40, 0, 0, 40, 50];\narray.indexOf(40); // 0',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.indexOf(40);
        }
    },
    // 17. join()
    {
        method: "Array.prototype.join()",
        description: "Une todos los elementos de un array en una cadena y devuelve esta cadena.",
        example: 'let array = [40, 0, 0, 40, 50];\narray.join("-"); // "40-0-0-40-50"',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.join("-");
        }
    },
    // 18. keys()
    {
        method: "Array.prototype.keys()",
        description: "Devuelve un nuevo objeto Iterador de Array que contiene las claves (índices) para cada índice del array.",
        example: 'let array = [40, 0, 0, 40, 50];\nlet iterator = array.keys();\n// Iterar sobre el iterador...',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            let iterator = array.keys();
            let result = [];
            for (const key of iterator) {
                result.push(key);
            }
            return result; // Muestra los índices
        }
    },
    // 19. lastIndexOf()
    {
        method: "Array.prototype.lastIndexOf()",
        description: "Devuelve el último índice en el que se puede encontrar un elemento dado, o -1 si no está presente.",
        example: 'let array = [40, 0, 0, 40, 50];\narray.lastIndexOf(40); // 3',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.lastIndexOf(40);
        }
    },
    // 20. map()
    {
        method: "Array.prototype.map()",
        description: "Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.",
        example: 'let array = [40, 0, 0, 40, 50];\nlet mapeado = array.map(n => n * 2);',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            return array.map(n => n * 2);
        }
    },
    // 21. pop()
    {
        method: "Array.prototype.pop()",
        description: "Elimina el último elemento de un array y devuelve ese elemento. Modifica el array original.",
        example: 'let array = [40, 0, 0, 40, 50];\narray.pop(); // Devuelve 50, array queda [40, 0, 0, 40]',
        execute: () => {
            let array = [40, 0, 0, 40, 50];
            let removed = array.pop();
            return `Elemento eliminado: ${removed}, Array resultante: [${array}]`;
        }
    },
    // 22. push()
    {
        method: "Array.prototype.push()",
        description: "Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array. Modifica el original.",
        example: 'let array = [40, 0, 0, 40];\narray.push(60); // Devuelve 5, array queda [40, 0, 0, 40, 60]',
        execute: () => {
            let array = [40, 0, 0, 40]; 
            array.push(60);
            return array;
        }
    },
    // 23. reduce()
    {
        method: "Array.prototype.reduce()",
        description: "Aplica una función a un acumulador y a cada valor (de izquierda a derecha) para reducirlo a un único valor.",
        example: 'let array = [40, 0, 0, 40, 60];\narray.reduce((acc, n) => acc + n, 0); // 140',
        execute: () => {
            let array = [40, 0, 0, 40, 60];
            return array.reduce((acc, n) => acc + n, 0);
        }
    },
    // 24. reduceRight()
    {
        method: "Array.prototype.reduceRight()",
        description: "Aplica una función a un acumulador y a cada valor (de derecha a izquierda) para reducirlo a un único valor.",
        example: 'let array = [40, 0, 0, 40, 60];\narray.reduceRight((acc, n) => acc - n, 0); // 0 - 60 - 40 - 0 - 0 - 40 = -140',
        execute: () => {
            let array = [40, 0, 0, 40, 60];
            return array.reduceRight((acc, n) => acc - n, 0);
        }
    },
    // 25. reverse()
    {
        method: "Array.prototype.reverse()",
        description: "Invierte el orden de los elementos de un array in-place (modifica el original).",
        example: 'let array = [40, 0, 0, 40, 60];\narray.reverse(); // [60, 40, 0, 0, 40]',
        execute: () => {
            let array = [40, 0, 0, 40, 60];
            array.reverse();
            return array;
        }
    },
    // 26. shift()
    {
        method: "Array.prototype.shift()",
        description: "Elimina el primer elemento de un array y devuelve ese elemento. Modifica el array original.",
        example: 'let array = [60, 40, 0, 0, 40];\narray.shift(); // Devuelve 60, array queda [40, 0, 0, 40]',
        execute: () => {
            let array = [60, 40, 0, 0, 40];
            let removed = array.shift();
            return `Elemento eliminado: ${removed}, Array resultante: [${array}]`;
        }
    },
    // 27. slice()
    {
        method: "Array.prototype.slice()",
        description: "Devuelve una copia superficial de una porción del array dentro de un nuevo objeto array.",
        example: 'let array = [40, 0, 0, 40];\narray.slice(1, 3); // [0, 0]',
        execute: () => {
            let array = [40, 0, 0, 40];
            return array.slice(1, 3);
        }
    },
    // 28. some()
    {
        method: "Array.prototype.some()",
        description: "Verifica si al menos un elemento del array cumple con la condición implementada por la función dada.",
        example: 'let array = [40, 0, 0, 40];\narray.some(n => n > 30); // true',
        execute: () => {
            let array = [40, 0, 0, 40];
            return array.some(n => n > 30);
        }
    },
    // 29. sort()
    {
        method: "Array.prototype.sort()",
        description: "Ordena los elementos de un array in-place (modifica el original). Se usa función comparadora para números.",
        example: 'let array = [40, 0, 0, 40];\narray.sort((a, b) => b - a); // Orden descendente',
        execute: () => {
            let array = [40, 0, 0, 40];
            array.sort((a, b) => b - a);
            return array;
        }
    },
    // 30. splice()
    {
        method: "Array.prototype.splice()",
        description: "Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos. Modifica el original.",
        example: 'let array = [40, 40, 0, 0];\n// Elimina 2 elementos desde el índice 1, y agrega 100, 200\narray.splice(1, 2, 100, 200);',
        execute: () => {
            let array = [40, 40, 0, 0];
            array.splice(1, 2, 100, 200);
            return array;
        }
    },
    // 31. [@@iterator]()
    {
        method: "Array.prototype.[@@iterator]()",
        description: "Devuelve el iterador por defecto de un array, usado implícitamente por 'for...of'.",
        example: 'let array = [40, 100, 200, 0];\n// for (const value of array) { ... }',
        execute: () => {
            let array = [40, 100, 200, 0];
            let result = [];
            for (const value of array) {
                result.push(value);
            }
            return `Recorrido: ${result.join(', ')}`;
        }
    },
    // 32. toLocaleString()
    {
        method: "Array.prototype.toLocaleString()",
        description: "Devuelve una cadena que representa los elementos del array, con formato regional (depende del entorno).",
        example: 'let array = [40, 100, 200, 0];\narray.toLocaleString(); // "40,100,200,0" (ejemplo, puede variar)',
        execute: () => {
            let array = [40, 100, 200, 0];
            return array.toLocaleString();
        }
    },
    // 33. toReversed()
    {
        method: "Array.prototype.toReversed()",
        description: "Devuelve un nuevo array con los elementos invertidos, sin modificar el original.",
        example: 'let array = [40, 100, 200, 0];\narray.toReversed(); // [0, 200, 100, 40]',
        execute: () => {
            let array = [40, 100, 200, 0];
            let reversed = array.toReversed();
            return `Copia invertida: [${reversed}], Original: [${array}]`;
        }
    },
    // 34. toSorted()
    {
        method: "Array.prototype.toSorted()",
        description: "Devuelve un nuevo array con los elementos ordenados, sin modificar el original.",
        example: 'let array = [40, 100, 200, 0];\narray.toSorted((a, b) => a - b); // [0, 40, 100, 200]',
        execute: () => {
            let array = [40, 100, 200, 0];
            // Orden ascendente
            return array.toSorted((a, b) => a - b);
        }
    },
    // 35. toSpliced()
    {
        method: "Array.prototype.toSpliced()",
        description: "Devuelve un nuevo array con algunos elementos eliminados y/o reemplazados, sin modificar el original.",
        example: 'let array = [40, 100, 200, 0];\n// Elimina 1 elemento desde el índice 1, agrega 300\narray.toSpliced(1, 1, 300); // [40, 300, 200, 0]',
        execute: () => {
            let array = [40, 100, 200, 0];
            return array.toSpliced(1, 1, 300);
        }
    },
    // 36. toString()
    {
        method: "Array.prototype.toString()",
        description: "Devuelve una cadena que representa el array (similar a join(',') ).",
        example: 'let array = [40, 100, 200, 0];\narray.toString(); // "40,100,200,0"',
        execute: () => {
            let array = [40, 100, 200, 0];
            return array.toString();
        }
    },
    // 37. unshift()
    {
        method: "Array.prototype.unshift()",
        description: "Agrega uno o más elementos al inicio del array y devuelve la nueva longitud. Modifica el original.",
        example: 'let array = [40, 100, 200, 0];\narray.unshift(10); // array queda [10, 40, 100, 200, 0]',
        execute: () => {
            let array = [40, 100, 200, 0];
            array.unshift(10);
            return array;
        }
    },
    // 38. values()
    {
        method: "Array.prototype.values()",
        description: "Devuelve un nuevo objeto Iterador de Array que contiene los valores para cada índice del array.",
        example: 'let array = [10, 40, 100, 200, 0];\nlet iterator = array.values();\n// Iterar sobre el iterador...',
        execute: () => {
            let array = [10, 40, 100, 200, 0];
            let iterator = array.values();
            let result = [];
            for (const value of iterator) {
                result.push(value);
            }
            return result; // Muestra los valores
        }
    },
    // 39. with()
    {
        method: "Array.prototype.with()",
        description: "Devuelve un nuevo array con el elemento en el índice dado reemplazado por un nuevo valor, sin modificar el original.",
        example: 'let array = [10, 40, 100, 200, 0];\narray.with(2, 500); // [10, 40, 500, 200, 0]',
        execute: () => {
            let array = [10, 40, 100, 200, 0];
            let newArray = array.with(2, 500);
            return `Copia modificada: [${newArray}], Original: [${array}]`;
        }
    }
];

// Función para mostrar los resultados al hacer clic en "Ejecutar Ejemplo"
// Esta función manipula el DOM para mostrar la salida de cada método.
window.showResult = function(index) {
    const resultDiv = document.getElementById(`result-${index}`);
    // Ejecuta la función asociada al método y obtiene el resultado
    let result;
    try {
        result = examples[index].execute(); 
    } catch (e) {
        result = `ERROR: ${e.message}`;
    }
    
    // Manipulación del DOM para mostrar el resultado
    resultDiv.style.display = "block";
    // Usa JSON.stringify para mostrar arrays y objetos de forma legible
    let output = typeof result === 'object' && result !== null ? JSON.stringify(result, null, 2) : String(result);

    resultDiv.textContent = 'Resultado: ' + output; 
}


// Renderizando las secciones dinámicamente al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("examples");
    examples.forEach(({ method, description, example }, index) => {
        const section = document.createElement("div");
        section.className = "method-section";
        section.innerHTML = `
            <div class="method-header">
                <h2>${method}</h2>
            </div>
            <p><strong>Descripción:</strong> ${description}</p>
            <pre><code>${example}</code></pre>
            <button class="btn btn-primary" onclick="showResult(${index})">Ejecutar Ejemplo</button>
            <div id="result-${index}" class="mt-3 alert alert-secondary" style="display: none; white-space: pre-wrap;"></div>
        `;
        container.appendChild(section);
    });
});