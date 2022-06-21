function crypt(msg, separa) {
    // Transformando a string em um array de letras
    let phrase = msg.split("");

    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < phrase.length; i++) {
        // Transformando cada letra em um BINARIO
        phrase[i] = (phrase[i].charCodeAt(0).toString(2));

        // Adicionando a separa separadora a cada um dos
        // itens do array (letras)
        phrase[i] += separa;
    }

    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
        // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}

function decrypt(cypher, separa) {
    let a =[];
    // Forço a separa a virar uma string
    let h = String(separa)
    // Uso a separa para dividir a string em um array
    const msg = cypher.split(h);

    // Passando por cada um dos elementos e:
    // - transformando informação para BINARIOS
    // - transformando de BINARIOS para caracteres
    for (let i = 0; i < msg.length; i++) {
        a.push(String.fromCharCode(parseInt(msg[i], 2)));
    }
    return a.join('');
}

const phrase = "deixa eu testar uma coisa";

//muita malícia, para binários
let pass = crypt(phrase, "O1");

console.log(pass);

let solve = decrypt(pass, "O1")

console.log(solve);