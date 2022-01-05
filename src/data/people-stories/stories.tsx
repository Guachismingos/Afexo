//Banner images
import storyImg1 from "../../assets/stories-assets/story-1.png";
import storyImg2 from "../../assets/stories-assets/story-2.png";
import storyImg3 from "../../assets/stories-assets/story-3.png";
import storyImg8 from "../../assets/stories-assets/story-8.png";
//icon Images
import iconImg1 from "../../assets/stories-assets/icon-1.png";
import iconImg2 from "../../assets/stories-assets/icon-2.png";
import iconImg3 from "../../assets/stories-assets/icon-3.png";
import iconImg8 from "../../assets/stories-assets/icon-8.png";

interface Story {
  title: string;
  body: string;
  name: string;
  age: number;
  image_url: string;
  icon_url: string;
}

const stories: Story[] = [
  {
    title: "Cuando me ganaron los nervios",
    body: "Para mi cumpleaños número 16 mi mamá me dejó invitar a mi grupo de compas para celebrar en mi casa. Después de cantar cumpleaños y estar un rato vacilando, mis amigos empezaron a irse. Al final quedamos solos mi novia y yo, porque la mamá de ella todavía estaba trabajando. Como casi nunca nos dejaban estar juntos solo nosotros dos, nos aprovechamos para ir a mi cuarto. Nos empezamos a besar y todo, entonces al rato yo le pregunté si quería y ella me dijo que sí. Yo saqué una caja de condones que me regaló mi hermano pero estaba tan nervioso que no sabía cuál era el lado correcto. Al final mi novia me tuvo que ayudar a ponérmelo, aunque a mí ya me habían explicado cómo se ponía y todo en el cole.",
    name: "Fabián",
    age: 16,
    image_url: storyImg8,
    icon_url: iconImg8,
  },
  {
    title: "Un momento especial",
    body: "La historia se da a mis 18 años con una amiga. Ella es una muchacha súper linda y buena, nos hicimos super amigos al punto que hacíamos todo juntos y pasábamos siempre pegas, pero todo siempre como amigos. Ella me preguntó que cómo fue mi primera vez, y yo con mucha vergüenza le respondí que nunca había hecho nada, más que todo porque tengo una condición que hace que use silla de ruedas y yo no quisiera tener un hijo igual a mí. Ella se quedó callada y cambiamos de tema. Al otro día me escribió y me dijo que le gustaría ser ella mi primera vez, para poder pasar un lindo momento.  A mí me dio cosa porque ella me parecía muy linda y además la amistad que tenemos es muy grande. Yo solo le puse “ok” porque estaba temblando de nervios. Por fin llegó el día, ella hizo algo de comer y hasta puso un ambiente romántico con rosas, yo estaba muy feliz. Vimos una película y cuando terminó ella me dio un beso. Después de eso tocó mi pantalón y me preguntó si podía, yo con todos los nervios le dije que sí. De repente se empezó a quitar la ropa pero agarrando mis manos simulando que yo lo hacía, fue súper lindo sentir que podía hacer mucho. Me ayudó a besarle el cuerpo y hacerle sexo oral, me explicó cómo hacerlo y que hacer durante el sexo. A la hora de la penetración me puse súper nervioso, pero ella me dio la mano y me puso el condón, todo fue muy tranquilo y lento para ayudarme. Ella siempre me enseñó durante todo el tiempo y me chineó demasiado para tener una bonita experiencia. Es algo que nunca voy a olvidar.",
    name: "Alex",
    age: 18,
    image_url: storyImg1,
    icon_url: iconImg1,
  },
  {
    title: "Mi primera vez con mi crush",
    body: "Desde la escuela me gustaba mucho un vecino de mis abuelos, pero solo lo veía cuando íbamos a visitarlos a Guana.Después de que cumplí 15, una amiga que tengo allá le dio mi número y empezamos a hablar.Nos empezamos a escribir todos los días hasta la madrugada y yo estaba super feliz.Un día hablando de todo un poco me preguntó si yo lo había hecho con alguien ya, y como yo le dije que no, él me dijo que podíamos intentar la próxima vez que yo fuera. La verdad fue la cosa más incómoda del mundo, yo no sabía qué hacer ni nada.Me dolió un poco y sangré, casi me muero de la vergüenza porque yo no sabía que podía pasar eso.Así que pasé pensando en la mancha de la sábana.Lo peor es que cuando terminamos lo empezaron a llamar y mandarle mensajes, resulta que era la novia que lo estaba esperando y yo ni sabía que la muchacha existía.Nos terminamos peleando y nunca más le hablé.",
    name: "Pame",
    age: 15,
    image_url: storyImg2,
    icon_url: iconImg2,
  },
  {
    title: "Tenía miedo de estar embarazada",
    body: "Un día fui a la casa de un amigo, y me dijo que no tenía condones. Yo le dije que todo bien, que yo tenía, lo saqué de mi bolso y empezamos. Estabamos en el cuarto de él y estaba muy oscuro entonces asumí que se puso el condón, pero ya después de que terminamos vi que no lo tenía, entonces paniquié por que me di cuenta de que nunca se lo puso. Yo tomo pastillas, pero estaba en la semana de pausa, ese día tenía que empezarlas otra vez, entonces fui, me limpié, y salí corriendo a la farmacia a comprarlas de una. Pasé demasiado preocupada porque no me venía la regla, no podía ni dormir. Desde ese susto me aseguro de tomarme a tiempo mis pastillas y revisar que la otra persona se haya puesto el condón correctamente y no se lo quite.",
    name: "Emily",
    age: 17,
    image_url: storyImg3,
    icon_url: iconImg3,
  },
];
export default stories;
