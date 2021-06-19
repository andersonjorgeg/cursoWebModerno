<h1>XMLHttpRequest</h1>

<table>
<tr>
    <th>Método</th>
    <th>Descrição</th>                  
</tr>
<tr>
    <td><span style="color: orange">open</span>(method, url, async)</td>   
    <td><br>Especifica o tipo de pedido<br>
        <span style="color: green">method</span> : o tipo de solicitação: GET ou POST<br> 
        <span style="color: green">url</span> : a localização do servidor (arquivo)<br>
        <span style="color: green">async</span> : verdadeiro (assíncrono) ou falso (síncrono)<br><br>
</tr>
<tr>
    <td><span style="color: orange">send</span>()</td>                                                       
    <td><br>Envia a solicitação para o servidor (usado para GET)<br><br></td>
</tr>
<tr>
    <td><span style="color: orange">send</span>(string)</td>                                                       
    <td><br>Envia a solicitação para o servidor (usado para POST)<br><br></td>
</tr>
</table>

<h1>A propriedade <span style="color: yellow">onreadystatechange</span></h1>

A <span style="color: pink">readyState</span> propriedade mantém o status do XMLHttpRequest.

A <span style="color: pink">onreadystatechange</span> propriedade define uma função de retorno de chamada a ser executada quando o readyState muda.

O <span style="color: pink">status</span> da propriedade e o <span style="color: pink">statusText</span> da propriedade contêm o status do objeto XMLHttpRequest.<br><br>

<table>
<tr>
    <th>Propriedade</th>
    <th>Descrição</th>
</tr>
<tr>
    <td><span style="color: orange">onreadystatechange</span></td>
    <td>Define uma função a ser chamada quando a propriedade readyState muda</td>
</tr>
<tr>
    <td><span style="color: orange">readyState</span></td>
    <td>Contém o status do XMLHttpRequest.<br>
        0: solicitação não inicializada<br>
        1: conexão do servidor estabelecida<br>
        2: pedido recebido<br>
        3: solicitação de processamento<br>
        4: pedido concluído e resposta pronta<br>
    </td>
</tr>
<tr>
    <td><span style="color: orange">status</span></td>
    <td>
        200: "OK"<br>
        403: "Proibido"<br>
        404 Página Não Encontrada"<br>
    </td>
</tr>
<tr>
    <td><span style="color: orange">statusText</span></td>
    <td>
        Retorna o texto de status(por exemplo "OK" or "Not Found")
    </td>
</tr>
</table>

<br><br>

A <span style="color: pink">onreadystatechange</span> função é chamada sempre que o readyState muda.

Quando <span style="color: pink">readyState</span> é 4 e o status é 200, a resposta está pronta

<br><br>

<h1>Propriedades de resposta do servidor</h1>

<table>
<tr>
    <th>Propriedade</th>
    <th>Descrição</th>
</tr>
<tr>
    <td><span style="color:orange">responseText</span></td>
    <td>obter os dados de resposta como uma string</td>
</tr>
<tr>
    <td><span style="color:orange">responseXML</span></td>
    <td>obter os dados de resposta como dados XML</td>
</tr>
</table>

<br><br>

<h1>Array.from()</h1>

O método <span style="color: pink">Array.from()</span> retorna um objeto Array de qualquer objeto com uma propriedade length ou um objeto iterável.

<h3>Sintaxe</h3>

<span style="color: skyblue">Array.from(object, mapFunction, thisValue)</span>

<h2>Valores de Parâmetro</h2>



<table>
<tr>
    <th>Parâmetro</th>
    <th>Descrição</th>
</tr>
<tr>
    <td><span style="color:orange">object</span></td>
    <td>Obrigatório. O objeto a ser convertido em uma matriz</td>
</tr>
<tr>
    <td><span style="color:orange">mapFunction</span></td>
    <td>Opcional. Uma função de mapa para chamar cada item da matriz</td>
</tr>
<tr>
    <td><span style="color:orange">thisValue</span></td>
    <td>Opcional. Um valor a ser usado como este ao executar o mapFunction</td>
</tr>
</table>