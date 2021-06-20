<h1>Array.prototype.<span style="color:orange">reduce()</span></h1>

<h2>Sintaxe</h2>

~~~javascript
array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
~~~~

<h2>Parâmetros</h2>

<p><span style="color:orange">callback</span></p>

<p>Função que é executada em cada valor no array (exceto no primeiro, se nenhum <span style="color:pink">valorInicial</span> for passado); recebe quatro argumentos:</p>

<p><span style="color:orange">acumulador</span></p>

<p>Opcional. O índice do elemento atual que está sendo processado no array. Começa a partir do index <span style="color:pink">0</span> se um <span style="color:pink">valorInicial</span> for fornecido. Do contrário, começa do index <span style="color:pink">1</span>.</p>

<p><span style="color:orange">valorInicial</span></p>

<p>Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função <span style="color:pink">callback</span>. Se nenhum <span style="color:pink">valorInicial</span> é fornecido, o primeiro elemento do array será usado como o valor inicial do <span style="color:pink">acumulador</span> e o <span style="color:pink">valorAtual</span> não será lido. Chamar <span style="color:pink">reduce()</span> em uma array vazia sem valor inicial retornará um erro.</p>