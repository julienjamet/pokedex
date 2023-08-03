import { IPokemon } from "../interfaces/interfaces"

export const data: IPokemon[] = [
    {
        number: 1,
        name: "Bulbizarre",
        evolve: "Herbizarre",
        description: "Bulbizarre passe son temps à faire la sieste sous le soleil. Il y a une graine sur son dos. Il absorbe les rayons du soleil pour faire doucement pousser la graine.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 2,
        name: "Herbizarre",
        evolve: "Florizarre",
        description: "Un bourgeon a poussé sur le dos de ce Pokémon. Pour en supporter le poids, Herbizarre a dû se muscler les pattes. Lorsqu'il commence à se prélasser au soleil, ça signifie que son bourgeon va éclore, donnant naissance à une fleur.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 3,
        name: "Florizarre",
        evolve: "",
        description: "Une belle fleur se trouve sur le dos de Florizarre. Elle prend une couleur vive lorsqu'elle est bien nourrie et bien ensoleillée. Le parfum de cette fleur peut apaiser les gens.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 4,
        name: "Salamèche",
        evolve: "Reptincel",
        description: "La flamme qui brûle au bout de sa queue indique l'humeur de ce Pokémon. Elle vacille lorsque Salamèche est content. En revanche, lorsqu'il s'énerve, la flamme prend de l'importance et brûle plus ardemment.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        type: ["Feu"]
    },
    {
        number: 5,
        name: "Reptincel",
        evolve: "Dracaufeu",
        description: "Reptincel lacère ses ennemis sans pitié grâce à ses griffes acérées. S'il rencontre un ennemi puissant, il devient agressif et la flamme au bout de sa queue s'embrase et prend une couleur bleu clair.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
        type: ["Feu"]
    },
    {
        number: 6,
        name: "Dracaufeu",
        evolve: "",
        description: "Dracaufeu parcourt les cieux pour trouver des adversaires à sa mesure. Il crache de puissantes flammes capables de faire fondre n'importe quoi. Mais il ne dirige jamais son souffle destructeur vers un ennemi plus faible.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        type: ["Feu", "Vol"]
    },
    {
        number: 7,
        name: "Carapuce",
        evolve: "Carabaffe",
        description: "La carapace de Carapuce ne sert pas qu'à le protéger. La forme ronde de sa carapace et ses rainures lui permettent d'améliorer son hydrodynamisme. Ce Pokémon nage extrêmement vite.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        type: ["Eau"]
    },
    {
        number: 8,
        name: "Carabaffe",
        evolve: "Tortank",
        description: "Carabaffe a une large queue recouverte d'une épaisse fourrure. Elle devient de plus en plus foncée avec l'âge. Les éraflures sur la carapace de ce Pokémon témoignent de son expérience aux combats.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        type: ["Eau"]
    },
    {
        number: 9,
        name: "Tortank",
        evolve: "",
        description: "Tortank dispose de canons à eau émergeant de sa carapace. Ils sont très précis et peuvent envoyer des balles d'eau capables de faire mouche sur une cible située à plus de 50 m.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        type: ["Eau"]
    },
    {
        number: 10,
        name: "Chenipan",
        evolve: "Chrysacier",
        description: "Chenipan a un appétit d'ogre. Il peut engloutir des feuilles plus grosses que lui. Les antennes de ce Pokémon dégagent une odeur particulièrement entêtante.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
        type: ["Insecte"]
    },
    {
        number: 11,
        name: "Chrysacier",
        evolve: "Papillusion",
        description: "La carapace protégeant ce Pokémon est dure comme du métal. Chrysacier ne bouge pas beaucoup. Il reste immobile pour préparer les organes à l'intérieur de sa carapace en vue d'une évolution future.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
        type: ["Insecte"]
    },
    {
        number: 12,
        name: "Papillusion",
        evolve: "",
        description: "Papilusion est très doué pour repérer le délicieux nectar qu'il butine dans les fleurs. Il peut détecter, extraire et transporter le nectar de fleurs situées à plus de 10 km de son nid.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
        type: ["Insecte", "Vol"]
    },
    {
        number: 13,
        name: "Aspicot",
        evolve: "Coconfort",
        description: "L'odorat d'Aspicot est extrêmement développé. Il lui suffit de renifler ses feuilles préférées avec son gros appendice nasal pour les reconnaître entre mille.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        type: ["Insecte", "Poison"]
    },
    {
        number: 14,
        name: "Coconfort",
        evolve: "Dardargnan",
        description: "Coconfort est la plupart du temps immobile et reste accroché à un arbre. Cependant, intérieurement, il est très actif, car il se prépare pour sa prochaine évolution. En touchant sa carapace, on peut sentir sa chaleur.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
        type: ["Insecte", "Poison"]
    },
    {
        number: 15,
        name: "Dardargnan",
        evolve: "",
        description: "Dardargnan est extrêmement possessif. Il vaut mieux ne pas toucher à son nid si on veut éviter d'avoir des ennuis. Lorsqu'ils sont en colère, ces Pokémon attaquent en masse.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
        type: ["Insecte", "Poison"]
    },
    {
        number: 16,
        name: "Roocool",
        evolve: "Roucoups",
        description: "Roucool a un excellent sens de l'orientation. Il est capable de retrouver son nid sans jamais se tromper, même s'il est très loin de chez lui et dans un environnement qu'il ne connaît pas.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 17,
        name: "Roucoups",
        evolve: "Roucarnage",
        description: "Roucoups utilise une vaste surface pour son territoire. Ce Pokémon surveille régulièrement son espace aérien. Si quelqu'un pénètre sur son territoire, il corrige l'ennemi sans pitié d'un coup de ses terribles serres.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 18,
        name: "Roucarnage",
        evolve: "",
        description: "Ce Pokémon est doté d'un plumage magnifique et luisant. Bien des Dresseurs sont captivés par la beauté fatale de sa huppe et décident de choisir Roucarnage comme leur Pokémon favori.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 19,
        name: "Rattata",
        evolve: "Rattatac",
        description: "Rattata est extrêmement prudent. Même lorsqu'il est endormi, il fait pivoter ses oreilles pour écouter autour de lui. En ce qui concerne son habitat, il n'est vraiment pas difficile. Il peut faire son nid n'importe où.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        type: ["Normal"]
    },
    {
        number: 20,
        name: "Rattatac",
        evolve: "",
        description: "Les crocs robustes de Rattatac poussent constamment. Pour éviter qu'ils raclent le sol, il se fait les dents sur des cailloux ou des troncs d'arbre. Il lui arrive même de ronger les murs des maisons.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
        type: ["Normal"]
    },
    {
        number: 21,
        name: "Piafabec",
        evolve: "Rapasdepic",
        description: "Piafabec crie tellement fort qu'il peut être entendu à 1km de distance. Ces Pokémon se préviennent d'un danger en entonnant une mélopée très aiguë, qu'ils se renvoient les uns les autres, comme un écho.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 22,
        name: "Rapasdepic",
        evolve: "",
        description: "On reconnaît un Rapasdepic à son long cou et à son bec allongé. Ces attributs lui permettent d'attraper facilement ses proies dans la terre ou dans l'eau. Il bouge son bec long et fin avec une grande agilité.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 23,
        name: "Abo",
        evolve: "Arbok",
        description: "Abo s'enroule en spirale pour dormir. Sa tête reste relevée de telle sorte que cette position lui permette de réagir rapidement si une menace survenait.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        type: ["Poison"]
    },
    {
        number: 24,
        name: "Arbok",
        evolve: "",
        description: "Ce Pokémon doté d'une force extraordinaire peut étrangler ses proies avec son corps. Il peut même écraser des tonneaux métalliques. Une fois sous l'étreinte d'Arbok, il est impossible de lui échapper.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png",
        type: ["Poison"]
    },
    {
        number: 25,
        name: "Pikachu",
        evolve: "Raichu",
        description: "Chaque fois que Pikachu découvre quelque chose de nouveau, il envoie un arc électrique. Lorsqu'on tombe sur une Baie carbonisée, ça signifie sans doute qu'un de ces Pokémon a envoyé une charge trop forte.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        type: ["Electrik"]
    },
    {
        number: 26,
        name: "Raichu",
        evolve: "",
        description: "Si ses joues contiennent trop d'électricité, Raichu plante sa queue dans le sol pour se décharger. On trouve des parcelles de terre brûlée à proximité du nid de ce Pokémon.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
        type: ["Electrik"]
    },
    {
        number: 27,
        name: "Sabelette",
        evolve: "Sablaireau",
        description: "Le corps de Sabelette lui permet d'économiser l'eau qu'il absorbe, afin de survivre longtemps dans le désert. Ce Pokémon s'enroule sur lui-même pour se protéger de ses ennemis.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        type: ["Sol"]
    },
    {
        number: 28,
        name: "Sablaireau",
        evolve: "",
        description: "Le corps de Sablaireau est recouvert de pointes très dures, qui sont des extensions de sa peau. Une fois par an, ce Pokémon mue et les vieilles pointes tombent, remplacées par de nouvelles.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png",
        type: ["Sol"]
    },
    {
        number: 29,
        name: "Nidoran f",
        evolve: "Nidorina",
        description: "Nidoran♀ est couvert de pointes qui secrètent un poison puissant. On pense que ce petit Pokémon a développé ces pointes pour se défendre. Lorsqu'il est en colère, une horrible toxine sort de sa corne.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png",
        type: ["Poison"]
    },
    {
        number: 30,
        name: "Nidorina",
        evolve: "Nidoqueen",
        description: "Lorsqu'un Nidorina est avec ses amis ou sa famille, il replie ses pointes pour ne pas blesser ses proches. Ce Pokémon devient vite nerveux lorsqu'il est séparé de son groupe.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png",
        type: ["Poison"]
    },
    {
        number: 31,
        name: "Nidoqueen",
        evolve: "",
        description: "Le corps de Nidoqueen est protégé par des écailles extrêmement dures. Il aime envoyer ses ennemis voler en leur fonçant dessus. Ce Pokémon utilise toute sa puissance lorsqu'il protège ses petits.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png",
        type: ["Poison", "Sol"]
    },
    {
        number: 32,
        name: "Nidoran m",
        evolve: "Nidorino",
        description: "Nidoran♂ a développé des muscles pour bouger ses oreilles. Ainsi, il peut les orienter à sa guise. Ce Pokémon peut entendre le plus discret des bruits.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png",
        type: ["Poison"]
    },
    {
        number: 33,
        name: "Nidorino",
        evolve: "Nidoking",
        description: "Nidorino dispose d'une corne plus dure que du diamant. S'il sent une présence hostile, toutes les pointes de son dos se hérissent d'un coup, puis il défie son ennemi.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png",
        type: ["Poison"]
    },
    {
        number: 34,
        name: "Nidoking",
        evolve: "",
        description: "L'épaisse queue de Nidoking est d'une puissance incroyable. En un seul coup, il peut renverser une tour métallique. Lorsque ce Pokémon se déchaîne, plus rien ne peut l'arrêter.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png",
        type: ["Poison", "Sol"]
    },
    {
        number: 35,
        name: "Mélofée",
        evolve: "Mélodelfe",
        description: "Les nuits de pleine lune, des groupes de ces Pokémon sortent jouer. Lorsque l'aube commence à poindre, les Mélofée fatigués rentrent dans leur retraite montagneuse et vont dormir, blottis les uns contre les autres.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        type: ["Fée"]
    },
    {
        number: 36,
        name: "Mélodelfe",
        evolve: "",
        description: "Les Mélodelfe se déplacent en sautant doucement, comme s'ils volaient. Leur démarche légère leur permet même de marcher sur l'eau. On raconte qu'ils se promènent sur les lacs, les soirs où la lune est claire.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png",
        type: ["Fée"]
    },
    {
        number: 37,
        name: "Goupix",
        evolve: "Feunard",
        description: "À sa naissance, Goupix a une queue blanche. Cette queue se divise en six si le Pokémon reçoit de l'amitié de la part de son Dresseur. Les six queues sont courbées et magnifiques.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        type: ["Feu"]
    },
    {
        number: 38,
        name: "Feunard",
        evolve: "",
        description: "Feunard peut envoyer un inquiétant rayon avec ses yeux rouge vif pour prendre le contrôle de l'esprit de son ennemi. On raconte que ce Pokémon peut vivre 1 000 ans.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
        type: ["Feu"]
    },
    {
        number: 39,
        name: "Rondoudou",
        evolve: "Grodoudou",
        description: "Rondoudou utilise ses cordes vocales pour ajuster librement la longueur d'onde de sa voix. Cela permet à ce Pokémon de chanter en utilisant une longueur d'onde qui endort ses ennemis.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png",
        type: ["Normal", "Fée"]
    },
    {
        number: 40,
        name: "Grodoudou",
        evolve: "",
        description: "Grodoudou a des yeux immenses et écarquillés. La surface de ses yeux est couverte d'une fine couche de larmes. Si de la poussière est projetée dans les yeux de ce Pokémon, elle est rapidement évacuée.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png",
        type: ["Normal", "Fée"]
    },
    {
        number: 41,
        name: "Nosferapti",
        evolve: "Nosferalto",
        description: "Nosferapti reste calme et immobile dans un coin sombre pendant la journée. En effet, une exposition trop longue à la lumière du soleil lui brûle légèrement la peau.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png",
        type: ["Poison", "Vol"]
    },
    {
        number: 42,
        name: "Nosferalto",
        evolve: "",
        description: "Nosferalto adore boire le sang des créatures vivantes. Il est particulièrement actif pendant les nuits noires. Ce Pokémon se balade dans les cieux étoilés, à la recherche de sang frais.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png",
        type: ["Poison", "Vol"]
    },
    {
        number: 43,
        name: "Mystherbe",
        evolve: "Ortide",
        description: "Pendant la journée, Mystherbe s'enterre dans le sol pour absorber avec son corps tout entier les nutriments présents dans la terre. Plus le sol est fertile, plus ses feuilles sont brillantes.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 44,
        name: "Ortide",
        evolve: "Rafflesia",
        description: "La plupart du temps, Ortide dégage un parfum immonde du pistil de sa fleur. Lorsqu'il se sent en danger, la puanteur est encore pire. Lorsque ce Pokémon se sent bien en sécurité, il ne dégage aucune odeur nauséabonde.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 45,
        name: "Rafflesia",
        evolve: "",
        description: "Le pollen toxique de Rafflesia déclenche d'affreuses réactions allergiques. C'est pourquoi il est conseillé de ne jamais s'approcher des jolies fleurs trouvées dans la jungle, même lorsqu'elles sont magnifiques.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 46,
        name: "Paras",
        evolve: "Parasect",
        description: "Paras accueille des champignons parasites appelés tochukaso qui poussent sur son dos. Ils grandissent grâce aux nutriments trouvés sur le dos de ce Pokémon Insecte.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png",
        type: ["Insecte", "Plante"]
    },
    {
        number: 47,
        name: "Parasect",
        evolve: "",
        description: "On sait que les Parasect vivent en groupe dans les grands arbres et se nourrissent des nutriments contenus dans le tronc et les racines. Lorsqu'un arbre infesté meurt, ils se précipitent vers le prochain.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png",
        type: ["Insecte", "Plante"]
    },
    {
        number: 48,
        name: "Mimitoss",
        evolve: "Aéromite",
        description: "On raconte que Mimitoss a évolué avec une fourrure de poils fins et drus qui protège son corps tout entier. Il est doté de grands yeux capables de repérer ses proies, même minuscules.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png",
        type: ["Insecte", "Poison"]
    },
    {
        number: 49,
        name: "Aéromite",
        evolve: "",
        description: "Aéromite est un Pokémon nocturne, il ne sort donc que la nuit. Ses proies préférées sont les petits insectes qui se rassemblent autour des réverbères, attirés par la lumière.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png",
        type: ["Insecte", "Poison"]
    },
    {
        number: 50,
        name: "Taupiqueur",
        evolve: "Triopikeur",
        description: "Les Taupiqueur sont élevés dans la plupart des fermes. En effet, lorsque ce Pokémon creuse quelque part, le sol est comme labouré, prêt à recevoir les semences. On peut alors y planter de délicieux légumes.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png",
        type: ["Sol"]
    },
    {
        number: 51,
        name: "Triopikeur",
        evolve: "",
        description: "Les Triopikeur sont en fait des triplés qui ont émergé du même corps. C'est pourquoi chaque triplé pense exactement comme les deux autres. Ils creusent inlassablement, dans une coopération parfaite.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png",
        type: ["Sol"]
    },
    {
        number: 52,
        name: "Miaouss",
        evolve: "Persian",
        description: "Miaouss peut rentrer ses griffes dans ses pattes pour rôder gracieusement sans laisser de traces. Étrangement, ce Pokémon raffole des pièces d'or qui brillent à la lumière.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
        type: ["Normal"]
    },
    {
        number: 53,
        name: "Persian",
        evolve: "",
        description: "Persian a six grosses vibrisses qui lui donnent un air costaud et lui permettent de sentir les mouvements de l'air pour savoir ce qui se trouve à proximité. Il devient docile lorsqu'on l'attrape par les moustaches.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png",
        type: ["Normal"]
    },
    {
        number: 54,
        name: "Psykokwak",
        evolve: "Akwakwak",
        description: "Psykokwak utilise un mystérieux pouvoir. Ce Pokémon peut générer des ondes cérébrales normalement observées chez les dormeurs. Cette découverte a lancé une polémique dans le milieu universitaire.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
        type: ["Eau"]
    },
    {
        number: 55,
        name: "Akwakwak",
        evolve: "",
        description: "Les pattes avant et arrière palmées et le corps aérodynamique d'Akwakwak lui donnent une vitesse effrayante. Ce Pokémon est bien plus rapide que les plus grands champions de natation.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png",
        type: ["Eau"]
    },
    {
        number: 56,
        name: "Férosinge",
        evolve: "Colossinge",
        description: "Lorsque Férosinge commence à trembler et que sa respiration devient haletante, cela signifie qu'il est en colère. En outre, la moutarde lui monte au nez tellement vite qu'il est presque impossible d'échapper à sa colère.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png",
        type: ["Combat"]
    },
    {
        number: 57,
        name: "Colossinge",
        evolve: "",
        description: "Lorsque Colossinge devient furieux, sa circulation sanguine s'accélère. Du coup, ses muscles sont encore plus puissants. En revanche, il devient bien moins intelligent.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png",
        type: ["Combat"]
    },
    {
        number: 58,
        name: "Caninos",
        evolve: "Arcanin",
        description: "Caninos a un odorat très développé. Ce Pokémon n'oublie jamais un parfum, quel qu'il soit. Il utilise son puissant sens olfactif pour deviner les émotions des autres créatures vivantes.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png",
        type: ["Feu"]
    },
    {
        number: 59,
        name: "Arcanin",
        evolve: "",
        description: "Arcanin est célèbre pour son extraordinaire vitesse. On le dit capable de parcourir plus de 10 000 km en 24 h. Le feu qui fait rage à l'intérieur du corps de ce Pokémon est la source de son pouvoir.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png",
        type: ["Feu"]
    },
    {
        number: 60,
        name: "Ptitard",
        evolve: "Têtarte",
        description: "Ptitard a une peau très fine. On peut même voir les entrailles en spirale de ce Pokémon à travers sa peau. Malgré sa finesse, cette peau est aussi très élastique. Même les crocs les plus acérés rebondissent dessus.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png",
        type: ["Eau"]
    },
    {
        number: 61,
        name: "Têtarte",
        evolve: "Tartard",
        description: "La peau de Têtarte est toujours maintenue humide par un liquide huileux. Grâce à cette protection graisseuse, il peut facilement se glisser hors de l'étreinte de n'importe quel ennemi.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png",
        type: ["Eau"]
    },
    {
        number: 62,
        name: "Tartard",
        evolve: "",
        description: "Les muscles solides et surdéveloppés de Tartard ne se fatiguent jamais, quels que soient les efforts qu'il produit. Ce Pokémon est tellement endurant qu'il peut traverser un océan à la nage avec une étonnante facilité.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png",
        type: ["Eau", "Combat"]
    },
    {
        number: 63,
        name: "Abra",
        evolve: "Kadabra",
        description: "Abra dort dix-huit heures par jour. Pourtant, il peut sentir la présence de ses ennemis, même endormi. Dans ce genre de situation, ce Pokémon se téléporte en lieu sûr.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png",
        type: ["Psy"]
    },
    {
        number: 64,
        name: "Kadabra",
        evolve: "Alakazam",
        description: "Kadabra émet une onde alpha si particulière qu'elle vous donne mal à la tête. Seuls les gens avec un psychisme puissant peuvent espérer devenir Dresseur de ce Pokémon.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png",
        type: ["Psy"]
    },
    {
        number: 65,
        name: "Alakazam",
        evolve: "",
        description: "Le cerveau d'Alakazam grossit sans arrêt, si bien que sa tête devient trop lourde pour son cou. Ce Pokémon maintient sa tête relevée grâce à son pouvoir télékinétique.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
        type: ["Psy"]
    },
    {
        number: 66,
        name: "Machoc",
        evolve: "Machopeur",
        description: "Les muscles de Machoc sont spéciaux. Quels que soient les efforts qu'il produit, il n'a jamais de courbature. Ce Pokémon est assez puissant pour lancer une centaine d'hommes adultes.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png",
        type: ["Combat"]
    },
    {
        number: 67,
        name: "Machopeur",
        evolve: "Mackogneur",
        description: "Les muscles toniques de Machopeur sont durs comme de l'acier. Ce Pokémon est si fort qu'il peut facilement soulever un sumo avec un seul doigt.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png",
        type: ["Combat"]
    },
    {
        number: 68,
        name: "Mackogneur",
        evolve: "",
        description: "Mackogneur est capable de déplacer n'importe quelle masse. Cependant ses bras s'emmêlent dès qu'il essaie de réaliser un travail délicat ou minutieux. Ce Pokémon a tendance à cogner d'abord et à réfléchir ensuite.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png",
        type: ["Combat"]
    },
    {
        number: 69,
        name: "Chétiflor",
        evolve: "Boustiflor",
        description: "Le corps long et flexible de Chétiflor lui permet de se tordre et d'osciller pour éviter tout type d'attaque, mêmes les plus puissantes. Ce Pokémon crache un fluide corrosif qui peut même dissoudre le fer.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 70,
        name: "Boustiflor",
        evolve: "Empiflor",
        description: "Boustiflor est doté d'un gros crochet. La nuit, ce Pokémon s'accroche à une branche pour s'endormir. Quand il a le sommeil agité, il se réveille par terre.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 71,
        name: "Empiflor",
        evolve: "",
        description: "Empiflor est doté d'une longue liane qui part de sa tête. Cette liane se balance et remue comme un animal pour attirer ses proies. Lorsque l'une d'elles s'approche un peu trop près, ce Pokémon l'avale entièrement.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png",
        type: ["Plante", "Poison"]
    },
    {
        number: 72,
        name: "Tentacool",
        evolve: "Tentacruel",
        description: "Le corps de Tentacool est principalement aqueux. Si on le retire de l'eau, il se déshydrate complètement. Si cela arrive, il suffit de le replonger dans un liquide pour qu'il reprenne sa forme normale.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png",
        type: ["Eau", "Poison"]
    },
    {
        number: 73,
        name: "Tentacruel",
        evolve: "",
        description: "Tentacruel a deux gros globes sur la tête. Les globes s'illuminent lorsqu'il va envoyer un violent rayon d'ultrasons. Lorsque ce Pokémon se déchaîne, il crée d'énormes vagues autour de lui.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png",
        type: ["Eau", "Poison"]
    },
    {
        number: 74,
        name: "Racaillou",
        evolve: "Gravalanch",
        description: "Lorsqu'un Racaillou prend de l'âge, ses bords s'ébrèchent et s'usent, ce qui lui donne une apparence plus ronde. Cependant, le cœur de ce Pokémon reste dur, rocailleux et rugueux.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png",
        type: ["Roche", "Sol"]
    },
    {
        number: 75,
        name: "Gravalanch",
        evolve: "Grolem",
        description: "Gravalanch grandit en se nourrissant de cailloux. Apparemment, il a une préférence pour les cailloux recouverts de mousse. En moyenne, il mange une tonne de rochers par jour.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png",
        type: ["Roche", "Sol"]
    },
    {
        number: 76,
        name: "Grolem",
        evolve: "",
        description: "Grolem vit à la montagne. Lorsqu'il y a un tremblement de terre, ces Pokémon roulent en groupe vers les contreforts montagneux.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0756.png",
        type: ["Roche", "Sol"]
    },
    {
        number: 77,
        name: "Ponyta",
        evolve: "Galopa",
        description: "À sa naissance, Ponyta est très faible. Il peut à peine tenir debout. Ce Pokémon se muscle en trébuchant et en tombant, lorsqu'il essaie de suivre ses parents.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png",
        type: ["Feu"]
    },
    {
        number: 78,
        name: "Galopa",
        evolve: "",
        description: "On voit souvent Galopa trotter dans les champs et les plaines. Cependant, lorsque ce Pokémon s'en donne la peine, il peut galoper à plus de 240 km/h et sa crinière flamboyante s'embrase.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png",
        type: ["Feu"]
    },
    {
        number: 79,
        name: "Ramoloss",
        evolve: "Flagadoss",
        description: "Ramoloss trempe sa queue dans l'eau au bord des rivières pour attraper ses proies. Cependant, ce Pokémon oublie souvent ce qu'il fait là et passe des jours entiers à traîner au bord de l'eau.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png",
        type: ["Eau", "Psy"]
    },
    {
        number: 80,
        name: "Flagadoss",
        evolve: "",
        description: "Flagadoss a un Kokiyas solidement attaché à sa queue. Du coup, il ne peut plus l'utiliser pour pêcher. Flagadoss s'est donc obligé, à contrecœur, de nager pour attraper ses proies.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png",
        type: ["Eau", "Psy"]
    },
    {
        number: 81,
        name: "Magnéti",
        evolve: "Magnéton",
        description: "Magnéti s'attache aux lignes à haute tension pour se charger en électricité. Si une maison a une panne de courant, il est conseillé de vérifier les fusibles car on trouve parfois ces Pokémon amassés sur la boîte à fusibles.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png",
        type: ["Electrik", "Acier"]
    },
    {
        number: 82,
        name: "Magnéton",
        evolve: "",
        description: "Magnéton émet un puissant champ magnétique qui neutralise les appareils électroniques. Lorsque ces Pokémon débarquent en masse, les villes sonnent l'alarme et préviennent les habitants.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png",
        type: ["Electrik", "Acier"]
    },
    {
        number: 83,
        name: "Canarticho",
        evolve: "",
        description: "On voit souvent des Canarticho avec une tige, récupérée sur une plante quelconque. Apparemment, ils peuvent distinguer les bonnes des mauvaises. On a vu ces Pokémon se battre pour des histoires de tiges.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 84,
        name: "Doduo",
        evolve: "Dodrio",
        description: "Les deux têtes de Doduo ne dorment jamais en même temps. Elles se reposent à tour de rôle pour que l'une puisse monter la garde pendant que l'autre dort.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 85,
        name: "Dodrio",
        evolve: "",
        description: "Il faut se méfier lorsque les trois têtes de Dodrio regardent dans des directions différentes. Cela signifie qu'il est sur ses gardes. Si c'est le cas, il vaut mieux ne pas s'approcher de ce Pokémon, il pourrait décider d'attaquer.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png",
        type: ["Normal", "Vol"]
    },
    {
        number: 86,
        name: "Otaria",
        evolve: "Lamantine",
        description: "Otaria chasse ses proie dans l'eau gelée, sous la couche de glace. Lorsqu'il cherche à respirer, il perce un trou en frappant la glace avec la partie saillante de sa tête.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png",
        type: ["Eau"]
    },
    {
        number: 87,
        name: "Lamantine",
        evolve: "",
        description: "Lamantine adore piquer un roupillon à même la glace. Il y a très longtemps, un marin ayant aperçu ce Pokémon dormant sur un glacier a cru voir une sirène.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png",
        type: ["Eau", "Glace"]
    },
    {
        number: 88,
        name: "Tadmorv",
        evolve: "Grotadmorv",
        description: "Le corps boueux et gélatineux de Tadmorv peut s'enfoncer dans n'importe quelle ouverture, même la plus petite. Ce Pokémon se promène dans les tuyaux des égouts pour boire de l'eau croupie.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png",
        type: ["Poison"]
    },
    {
        number: 89,
        name: "Grotadmorv",
        evolve: "",
        description: "Un fluide nauséabond suinte du corps de Grotadmorv, agressant les narines de ses ennemis. Une seule goutte de ce fluide suffit à faire croupir un bassin d'eau propre.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png",
        type: ["Poison"]
    },
    {
        number: 90,
        name: "Kokiyas",
        evolve: "Crustabri",
        description: "La nuit, ce Pokémon utilise sa grande langue pour creuser un trou dans le sable des fonds marins afin d'y dormir. Une fois endormi, Kokiyas referme sa coquille, mais laisse sa langue dépasser.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png",
        type: ["Eau"]
    },
    {
        number: 91,
        name: "Crustabri",
        evolve: "",
        description: "Crustabri est capable de se déplacer dans les fonds marins en avalant de l'eau et en la rejetant vers l'arrière. Ce Pokémon envoie des pointes en utilisant la même méthode.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png",
        type: ["Eau", "Glace"]
    },
    {
        number: 92,
        name: "Fantominus",
        evolve: "Spectrum",
        description: "Fantominus est principalement constitué de matière gazeuse. Lorsqu'il est exposé au vent, son corps gazeux se disperse et diminue. Des groupes de ce Pokémon se rassemblent sous les auvents des maisons pour se protéger.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png",
        type: ["Spectre", "Poison"]
    },
    {
        number: 93,
        name: "Spectrum",
        evolve: "Ectoplasma",
        description: "Spectrum est un Pokémon dangereux. Si l'un d'entre eux fait signe d'approcher, il ne faut jamais l'écouter. Ce Pokémon risque de sortir sa langue pour essayer de voler votre vie.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png",
        type: ["Spectre", "Poison"]
    },
    {
        number: 94,
        name: "Ectoplasma",
        evolve: "",
        description: "Parfois, pendant les nuits noires, une ombre projetée par une réverbère peut tout à coup vous dépasser. Il s'agit d'un Ectoplasma qui court, en se faisant passer pour l'ombre de quelqu'un d'autre.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
        type: ["Spectre", "Poison"]
    },
    {
        number: 95,
        name: "Onyx",
        evolve: "",
        description: "Onix a dans le cerveau un aimant qui lui sert de boussole. Il permet à ce Pokémon de ne pas se perdre pendant qu'il creuse. En prenant de l'âge, son corps s'arrondit et se polit.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png",
        type: ["Roche", "Sol"]
    },
    {
        number: 96,
        name: "Soporifik",
        evolve: "Hypnomade",
        description: "Lorsque les enfants ont le nez qui les démange en dormant, c'est sans doute parce que ce Pokémon se tient au-dessus de leur oreiller, afin d'essayer de manger leurs rêves par leurs narines.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png",
        type: ["Psy"]
    },
    {
        number: 97,
        name: "Hypnomade",
        evolve: "",
        description: "Hypnomade tient un pendule dans sa main. Le mouvement de balancier et les reflets brillants du pendule hypnotisent profondément son ennemi. Lorsque ce Pokémon cherche ses proies, il nettoie son pendule.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png",
        type: ["Psy"]
    },
    {
        number: 98,
        name: "Krabby",
        evolve: "Krabboss",
        description: "Krabby vit sur les plages, enterré dans le sable. Sur les plages où on trouve un peu de nourriture, on peut voir ces Pokémon se disputer pour défendre leur territoire.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png",
        type: ["Eau"]
    },
    {
        number: 99,
        name: "Krabboss",
        evolve: "",
        description: "Krabboss est doté d'une pince gigantesque, surdimensionnée. Il l'agite en l'air pour communiquer avec ses semblables. En revanche, sa pince est tellement lourde que ce Pokémon se fatigue très vite.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png",
        type: ["Eau"]
    },
    {
        number: 100,
        name: "Voltorbe",
        evolve: "Electrode",
        description: "La première fois qu'on a vu Voltorbe, c'était dans une usine qui fabrique des Poké Balls. Personne n'a jamais pu expliquer le lien entre cet évènement et la ressemblance frappante de ce Pokémon avec une Poké Ball.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png",
        type: ["Electrik"]
    },
    {
        number: 101,
        name: "Electrode",
        evolve: "",
        description: "Électrode mange l'électricité qui se trouve dans l'atmosphère. Les jours d'orage, on peut voir ce Pokémon exploser sans arrêt parce qu'il a avalé trop d'électricité.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png",
        type: ["Electrik"]
    },
    {
        number: 102,
        name: "Noeunoeuf",
        evolve: "Noadkoko",
        description: "Ce Pokémon est constitué de six œufs formant une grappe serrée. Ces six œufs s'attirent mutuellement et pivotent. Quand des fissures apparaissent sur les coquilles, ça signifie que Noeunoeuf est sur le point d'évoluer.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png",
        type: ["Plante", "Psy"]
    },
    {
        number: 103,
        name: "Noadkoko",
        evolve: "",
        description: "Noadkoko vient des tropiques. À force de vivre sous un soleil ardent, ses têtes ont rapidement grandi. On raconte que lorsque ses têtes tombent, elles se rassemblent et forment un Noeunoeuf.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png",
        type: ["Plante", "Psy"]
    },
    {
        number: 104,
        name: "Osselait",
        evolve: "Ossatueur",
        description: "La maman d'Osselait lui manque terriblement et il ne la reverra jamais. La lune le fait pleurer, car elle lui rappelle sa mère. Les taches sur le crâne que porte ce Pokémon sont les marques de ses larmes.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png",
        type: ["Sol"]
    },
    {
        number: 105,
        name: "Ossatueur",
        evolve: "",
        description: "Ossatueur est la forme évoluée d'Osselait. il a surmonté le chagrin causé par la perte de sa maman et s'est endurci. Le tempérament décidé et entier de ce Pokémon le rend très difficile à amadouer.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png",
        type: ["Sol"]
    },
    {
        number: 106,
        name: "Kicklee",
        evolve: "",
        description: "Les jambes de Kicklee peuvent se contracter et s'étirer à volonté. Grâce à ces jambes à ressort, il terrasse ses ennemis en les rouant de coups de pied. Après les combats, il masse ses jambes pour éviter de sentir la fatigue.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png",
        type: ["Combat"]
    },
    {
        number: 107,
        name: "Tygnon",
        evolve: "",
        description: "On raconte que Tygnon dispose de l'état d'esprit d'un boxeur qui s'entraîne pour le championnat du monde. Ce Pokémon est doté d'une ténacité à toute épreuve et n'abandonne jamais face à l'adversité.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png",
        type: ["Combat"]
    },
    {
        number: 108,
        name: "Excelangue",
        evolve: "",
        description: "Chaque fois qu'Excelangue découvre quelque chose de nouveau, il le lèche. Sa mémoire est basée sur le goût et la texture des objets. Il n'aime pas les choses acides.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/108.png",
        type: ["Normal"]
    },
    {
        number: 109,
        name: "Smogo",
        evolve: "Smogogo",
        description: "Lorsque Smogo s'agite, ça augmente la toxicité de ses gaz internes. Il les projette ensuite par les nombreux orifices de son corps. Ce Pokémon peut aussi gonfler son corps et le faire exploser.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png",
        type: ["Poison"]
    },
    {
        number: 110,
        name: "Smogogo",
        evolve: "",
        description: "Smogogo adore les gaz qui se dégagent des aliments pourris dans les poubelles. Ce Pokémon cherche généralement les maisons sales et mal tenues pour y habiter. La nuit, quand tout le monde est endormi, il fouille les détritus.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png",
        type: ["Poison"]
    },
    {
        number: 111,
        name: "Rhinocorne",
        evolve: "Rhinoféros",
        description: "Rhinocorne charge droit devant lui, détruisant tout sur son passage. Il ne s'arrête jamais, même lorsqu'il charge un bloc d'acier. Malgré tout, il sent la douleur le lendemain.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png",
        type: ["Sol", "Roche"]
    },
    {
        number: 112,
        name: "Rhinoféros",
        evolve: "",
        description: "La corne de Rhinoféros peut même casser du diamant brut. Et avec un simple coup de queue, il peut détruire un bâtiment. La peau de ce Pokémon est incroyablement dure. Un boulet de canon ne lui ferait même pas une égratignure.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png",
        type: ["Sol", "Roche"]
    },
    {
        number: 113,
        name: "Leveinard",
        evolve: "",
        description: "Leveinard pond tous les jours des œufs pleins de vitamines. Ces œufs sont tellement bons que les gens les mangent même quand ils n'ont pas faim.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png",
        type: ["Normal"]
    },
    {
        number: 114,
        name: "Saquedeneu",
        evolve: "",
        description: "Les lianes de Saquedeneu se brisent facilement lorsqu'on les attrape. Cela ne lui fait pas mal et lui permet simplement de s'échapper rapidement. Les lianes cassées repoussent le lendemain.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/114.png",
        type: ["Plante"]
    },
    {
        number: 115,
        name: "Kangourex",
        evolve: "",
        description: "Lorsqu'on rencontre un petit Kangourex qui joue tout seul, il ne faut jamais le déranger ou essayer de l'attraper. Les parents du bébé Pokémon sont sûrement dans le coin et ils risquent d'entrer dans une colère noire.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png",
        type: ["Normal"]
    },
    {
        number: 116,
        name: "Hypotrempe",
        evolve: "Hypocéan",
        description: "Hypotrempe mange des petits insectes et de la mousse trouvée sur les cailloux. Lorsque les courants océaniques sont trop forts, ce Pokémon peut s'ancrer en accrochant sa queue aux rochers ou aux coraux.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png",
        type: ["Eau"]
    },
    {
        number: 117,
        name: "Hypocéan",
        evolve: "",
        description: "Hypocéan déclenche des tourbillons en faisant tournoyer son corps. Ces tourbillons sont assez puissants pour engloutir des bateaux de pêche. Ce Pokémon affaiblit sa proie grâce à ces courants, puis l'avale en une bouchée.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png",
        type: ["Eau"]
    },
    {
        number: 118,
        name: "Poissirène",
        evolve: "Poissoroy",
        description: "Poissirène est un Pokémon magnifique doté de nageoires qui ondulent élégamment dans les profondeurs. Il ne faut pourtant pas baisser sa garde face à ce Pokémon, car il peut charger avec sa puissante corne.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png",
        type: ["Eau"]
    },
    {
        number: 119,
        name: "Poissoroy",
        evolve: "",
        description: "En automne, on peut voir les Poissoroy mâles effectuer des danses nuptiales dans les rivières pour plaire aux femelles. C'est pendant cette saison que le corps de ce Pokémon prend ses plus belles couleurs.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png",
        type: ["Eau"]
    },
    {
        number: 120,
        name: "Stari",
        evolve: "Staross",
        description: "Au centre de Stari se trouve un organe rouge et brillant appelé le cœur. À la fin de l'été, sur les plages, les cœurs de ces Pokémon brillent comme les étoiles dans le ciel.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png",
        type: ["Eau"]
    },
    {
        number: 121,
        name: "Staross",
        evolve: "",
        description: "Le centre de Staross, son cœur, resplendit de sept différentes couleurs. Du fait de sa brillance naturelle, on appelle ce Pokémon le «joyau des mers».",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png",
        type: ["Eau", "Psy"]
    },
    {
        number: 122,
        name: "M. Mime",
        evolve: "",
        description: "M. Mime est un pantomime hors pair. Ses gestes et ses mouvements parviennent à faire croire que quelque chose d'invisible existe réellement. Lorsqu'on y croit, ces choses deviennent palpables.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png",
        type: ["Psy", "Fée"]
    },
    {
        number: 123,
        name: "Insécateur",
        evolve: "",
        description: "Insécateur est incroyablement rapide. Sa vitesse fulgurante améliore l'efficacité des deux lames situées sur ses avant-bras. Elles sont si coupantes qu'elles peuvent trancher un énorme tronc d'arbre en un coup.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png",
        type: ["Insecte", "Vol"]
    },
    {
        number: 124,
        name: "Lippoutou",
        evolve: "",
        description: "Lippoutou marche en rythme, ondule de tout son corps et se déhanche comme s'il dansait. Ses mouvements sont si communicatifs que les gens qui le voient sont soudain pris d'une terrible envie de bouger les hanches, sans réfléchir.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png",
        type: ["Glace", "Psy"]
    },
    {
        number: 125,
        name: "Elektek",
        evolve: "",
        description: "Lorsqu'une tempête approche, des groupes entiers de ce Pokémon se battent pour grimper sur les hauteurs, où la foudre a le plus de chance de tomber. Certaines villes se servent d'Élektek en guise de paratonnerres.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png",
        type: ["Electrik"]
    },
    {
        number: 126,
        name: "Magmar",
        evolve: "",
        description: "Lorsqu'il se bat, Magmar fait jaillir des flammes de son corps pour intimider son adversaire. Les explosions enflammées de ce Pokémon déclenchent des vagues de chaleur qui embrasent la végétation environnante.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png",
        type: ["Feu"]
    },
    {
        number: 127,
        name: "Scarabrute",
        evolve: "",
        description: "Scarabrute est incroyablement fort. Il peut attraper un ennemi qui pèse deux fois son poids dans ses mandibules et le soulever sans le moindre problème. Lorsqu'il fait froid, les mouvements de ce Pokémon sont un peu ralentis.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png",
        type: ["Insecte"]
    },
    {
        number: 128,
        name: "Tauros",
        evolve: "",
        description: "Ce Pokémon n'est pas satisfait s'il ne détruit pas tout sur son passage. Lorsque Tauros ne trouve pas d'adversaire, il se rue sur de gros arbres et les déracine pour passer ses nerfs.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png",
        type: ["Normal"]
    },
    {
        number: 129,
        name: "Magicarpe",
        evolve: "Léviator",
        description: "Magicarpe est un Pokémon ridicule qui ne sait faire que des ronds dans l'eau ou se laisser porter par les courants. Son comportement a donné envie aux savants d'étudier son cas.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png",
        type: ["Eau"]
    },
    {
        number: 130,
        name: "Léviator",
        evolve: "",
        description: "Quand Magicarpe évolue et devient Léviator, la structure de ses cellules cérébrales est modifiée. On pense que l'extrême violence de ce Pokémon découle de cette modification.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png",
        type: ["Eau", "Vol"]
    },
    {
        number: 131,
        name: "Lokhlass",
        evolve: "",
        description: "Les Lokhlass sont en voie d'extinction. Le soir, on entend ce Pokémon chantonner une complainte mélancolique, espérant retrouver ses rares congénères.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/131.png",
        type: ["Eau", "Glace"]
    },
    {
        number: 132,
        name: "Métamorph",
        evolve: "",
        description: "Métamorph peut modifier sa structure moléculaire pour prendre d'autres formes. Lorsqu'il essaie de se transformer de mémoire, il lui arrive de se tromper sur certains détails.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png",
        type: ["Normal"]
    },
    {
        number: 133,
        name: "Evoli",
        evolve: "Aquali",
        description: "Évoli a une structure génétique instable qui se transforme en fonction de l'environnement dans lequel il vit. Ce Pokémon peut évoluer grâce aux radiations de diverses pierres.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
        type: ["Normal"]
    },
    {
        number: 134,
        name: "Aquali",
        evolve: "",
        description: "Aquali a subi une mutation spontanée. Des nageoires et des branchies sont apparues sur son corps, ce qui lui permet de vivre dans les fonds marins. Ce Pokémon peut contrôler l'eau à volonté.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png",
        type: ["Eau"]
    },
    {
        number: 135,
        name: "Voltali",
        evolve: "",
        description: "Les cellules de Voltali génèrent un courant de faible intensité. Ce pouvoir est amplifié par l'électricité statique de ses poils, ce qui lui permet d'envoyer des éclairs. Sa fourrure hérissée est faite d'aiguilles chargées d'électricité.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png",
        type: ["Electrik"]
    },
    {
        number: 136,
        name: "Pyroli",
        evolve: "",
        description: "La fourrure soyeuse de Pyroli a une fonction anatomique. Elle rejette la chaleur dans l'air pour que son corps ne surchauffe pas. La température du corps de ce Pokémon peut atteindre 900 °C.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png",
        type: ["Feu"]
    },
    {
        number: 137,
        name: "Porygon",
        evolve: "",
        description: "Porygon est capable de se décompiler et de retourner à l'état de programme informatique pour entrer dans le cyberespace. Ce Pokémon est protégé contre le piratage, il est donc impossible de le copier.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png",
        type: ["Normal"]
    },
    {
        number: 138,
        name: "Amonita",
        evolve: "Amonistar",
        description: "Amonita est l'un des Pokémon disparus depuis longtemps et qui furent ressuscités à partir de fossiles. Lorsqu'il est attaqué par un ennemi, il se rétracte dans sa coquille.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png",
        type: ["Roche", "Eau"]
    },
    {
        number: 139,
        name: "Amonistar",
        evolve: "",
        description: "Amonistar utilise ses tentacules pour capturer ses proies. On pense que l'espèce s'est éteinte parce que sa coquille était devenue trop grande et trop lourde, ce qui rendait ses mouvements lents et pesants.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png",
        type: ["Roche", "Eau"]
    },
    {
        number: 140,
        name: "Kabuto",
        evolve: "Kabutops",
        description: "Kabuto est un Pokémon ressuscité à partir d'un fossile. Cependant, on a découvert des spécimens vivants. Ce Pokémon n'a pas changé depuis 300 millions d'années.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png",
        type: ["Roche", "Eau"]
    },
    {
        number: 141,
        name: "Kabutops",
        evolve: "",
        description: "Jadis, Kabutops plongeait dans les profondeurs pour trouver ses proies. Apparemment, ce Pokémon vivant sur terre est l'évolution d'une créature marine, comme le prouvent les changements dans ses branchies.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png",
        type: ["Roche", "Eau"]
    },
    {
        number: 142,
        name: "Ptéra",
        evolve: "",
        description: "Ptéra est un Pokémon de l'ère des dinosaures. Il fut ressuscité à partir de cellules extraites d'un morceau d'ambre. On pense qu'il était le roi des cieux à l'époque préhistorique.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png",
        type: ["Roche", "Vol"]
    },
    {
        number: 143,
        name: "Ronflex",
        evolve: "",
        description: "Les journées de Ronflex se résument aux repas et aux siestes. C'est un Pokémon tellement gentil que les enfants n'hésitent pas à jouer sur son énorme ventre.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png",
        type: ["Normal"]
    },
    {
        number: 144,
        name: "Artikodin",
        evolve: "",
        description: "Artikodin est un Pokémon Oiseau légendaire qui peut contrôler la glace. Le battement de ses ailes gèle l'air tout autour de lui. C'est pourquoi on dit que lorsque ce Pokémon vole, il va neiger.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png",
        type: ["Glace", "Vol"]
    },
    {
        number: 145,
        name: "Electhor",
        evolve: "",
        description: "Électhor est un Pokémon Oiseau légendaire capable de contrôler l'électricité. Il vit généralement dans les nuages orageux. Ce Pokémon gagne en puissance lorsqu'il est frappé par la foudre.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png",
        type: ["Electrik", "Vol"]
    },
    {
        number: 146,
        name: "Sulfura",
        evolve: "",
        description: "Sulfura est un Pokémon Oiseau légendaire capable de contrôler le feu. On raconte que lorsque ce Pokémon est blessé, il se baigne dans le magma en ébullition d'un volcan pour se soigner.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png",
        type: ["Feu", "Vol"]
    },
    {
        number: 147,
        name: "Minidraco",
        evolve: "Draco",
        description: "Minidraco mue constamment, renouvelant sans arrêt sa peau. En effet, l'énergie vitale de son corps augmente régulièrement et sa mue lui permet d'éviter d'atteindre des niveaux incontrôlables.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png",
        type: ["Dragon"]
    },
    {
        number: 148,
        name: "Draco",
        evolve: "Dracolosse",
        description: "Draco stocke une quantité d'énergie considérable dans son corps. On raconte qu'il peut modifier les conditions climatiques autour de lui en déchargeant l'énergie contenue dans les cristaux de son cou et de sa queue.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png",
        type: ["Dragon"]
    },
    {
        number: 149,
        name: "Dracolosse",
        evolve: "",
        description: "Dracolosse est capable de faire le tour de la planète en seize heures à peine. C'est un Pokémon au grand cœur qui ramène à bon port les navires perdus dans les tempêtes.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png",
        type: ["Dragon", "Vol"]
    },
    {
        number: 150,
        name: "Mewtwo",
        evolve: "",
        description: "Mewtwo est un Pokémon créé par manipulation génétique. Cependant, bien que les connaissances scientifiques des humains aient réussi à créer son corps, elles n'ont pas pu doter Mewtwo d'un cœur sensible.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png",
        type: ["Psy"]
    },
    {
        number: 151,
        name: "Mew",
        evolve: "",
        description: "On dit que Mew possède le code génétique de tous les autres Pokémon. Il peut se rendre invisible à sa guise, ce qui lui permet de ne pas se faire remarquer quand il s'approche des gens.",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png",
        type: ["Psy"]
    }
]