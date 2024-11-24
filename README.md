Nome do Projeto: AC6-Build-Randomizer
# Descrição do Projeto
Armored Core 6 é um
jogo que já tenho mais de 100 horas no mesmo, se trata de um jogo de Mecha,
onde você monta um robô humanoide e usa o mesmo em missões. O jogo
oferece uma variedade imensa de partes pra montar o robô, todas afetando a
gameplay. Algumas mais pesadas que outras, afetando a mobilidade, armas
diferentes, alterando como você aproxima o combate, 3 tipos diferentes de
pernas pro robô, podendo montar um parecido com um tanque, um mais
convencional, ou um focado em mobilidade aérea, etc. etc. Enfim, existe uma
variedade imensa em como você pode montar o mesmo, o que chamamos de
Build. A build é de longe a parte mais definitiva do jogo, porém o jogo não tem
uma opção de criar uma build aleatória, algo que acho que seria bem divertido,
iria me forçar a usar algumas armas e partes que não estou acostumada,
criando um desafio maior além de deixar o jogo mais variado, principalmente
considerando que já terminei todo o conteúdo do jogo hehe.
Enfim, a proposta é criar uma página Web, bem simples, com algumas opções,
que gera uma build para o jogador, infelizmente não é bem possível integrar
com o jogo sem uma programação bem low level que ainda não possuo
conhecimento algum sobre, então a página gera uma build, e você copia a
mesma para o jogo, daí vem o Build Randomizer no nome do projeto.

**Tecnologias utilizadas:** ReactJS, CSS

# Entregas
## Bimestre 1
- Criação do design da página, divido em 4 partes (8 Pontos, 2 cada):
  - Menu na esquerda que mostra cada parte atualmente na build
  - Os botões que irão aleatorizar as partes. Ambos para alteração indivual e os 2 botões para alterar a build por um completo
  - Checkboxes que futuramente serão programadas como opções para o processo de aleatorizar a build
  - Painel que mostra os valores de peso, e load na build
- Implementar animações para os botões e uma "barra de progresso" para os elementos de peso e en load (2 pontos)
## Bimestre 2
- Implementar a funcionalidade dos botões de aleatorizar cada parte individual (2 pontos)
- Implementar a funcionalidade do botão para aleatorizar todas as partes de uma vez (2 pontos)
- Implementar a funcionalidade das checkboxes, afetando o processo de aleatorização da build (2 pontos, 1 para cada):
  - "Disable Overweight on Full Randomize" serve para previnir que a build gerada tenha peso acima do limite. Para testar essa funcionalidade, basta desativar e gerar até sair uma onde a barra fique vermelha e mostre "Overweight"
  - "Includes Nothing in Weapon Rotation" serve para permitir que sejam geradas builds onde, na rotação das armas em específico (os 4 primeiros elementos), possa sair "nothing", que seria não equipar uma arma naquele espaço
  - "Includes Arm Units in Back Unit Rotation" serve para permitir que armas equipadas nas mãos do mecha possam ser incluídas na rotação de armas equipadas nas costas. Devido a dificuldade de testar esta, pois nesse caso precisaria verificar uma lista com todas as armas equipadas nas mãos do mecha, não vale pontos, considere apenas as de cima
- Código versionado corretamente no Github, com deploy (2 pontos)
- Readme bem feito com detalhes sobre cada funcionalidade, está abaixo das entregas, próxima seção. Este estou fazendo em inglês pois será o Readme permanente que vou manter no repo depois da avaliação, todos estes detalhes sobre entrega são apenas temporários (2 pontos)


# Armored Core 6 - Build Randomizer
## What is this project
As stated by the very name of the project, it's a build randomizer for AC6. This was created cause I wanted to shake up the gameplay a little, make stuff more fun and all. Once you complete the game there kinda isn't a lot to do besides PvP with really bad netcode lol. So what if I gave myself smth to do? As such, I'm making this randomizer! Unfortunately I don't have the knowledge or experience to mod the game and make a full on in game randomizer, so instead, this is a web app!

Basically, you use it to generate a build, and then you copy in-game. It's a manual process yeah, unfortunate. But still, it's better than not having a randomizer. I am also aware there are already randomizers out there, but the ones I found lacked some options I really wanted, and like, they weren't pretty so I made my own (not tryna flame y'alls randomizers lmao).

## All the functionality
### Randomize All Parts
If you want to randomize all parts, just click on the Randomize Build button. This will generate a build on 2 conditions: it doesn't go over the EN LOAD, and doesn't go over the ARMS LOAD. These are default and you can't change. I mean you literally can't even play the videogame with your mecha if it's over 100% EN LOAD so I figured that's okay.

You can however change one option, which is to include Overweight mechas on the rotation, if you want an extra possible challenge. Just uncheck the "Disable Overweight on Full Randomize" box and do full randomize.

### Randomize Individual Parts
For this one, none of the above rules apply. If you randomize an individual part, it will not account for EN LOAD, ARMS LOAD or even Weight, it will ignore it.

### Other Stuff
So first, there's a button for Randomizing Missions if you don't feel like deciding which one you wanna go yourself. Besides that, there's 2 checkboxes that allow you to enable and disable Arms Weapons in the Back Rotation, in case you want to include the possibility of builds with weapon swap instead of back weapons. These affect both full rotations or single rotations.

Besides that, you can see the current EN LOAD, ARMS LOAD and Weight of the build. It will warn you for going over any of them!

That is all, hope you like using it

Trans Rights are human rights
~ Nephi Lynn
