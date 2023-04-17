## Que es la concurrencia?

- Definimos como una situacion en la que nos da la idea de pasar "al mismo tiempo" pero no es en realidad asi.
- Tengo diferentes contextos de ejecucion y cada uno realiza diferentes tareas con sus respectivos recursos

Por otro lado, existe _paralelismo_, que es cuando realmente se ejecutan en paralelo, es decir, en el mismo instante de tiempo.
Esto se puede dar solo cuando nuestra computadora tiene mas de un único nucleo de procesamiento.

Por ende, cuando tenemos concurrencia podemos hablar de _condicion de carrera_, que la definimos como la situacion en la que 2 contextos de ejecucion o requieren de un mismo recurso compartido. Esto nos lleva a que la ejecucion de nuestro codigo sea **indeterministica**.
