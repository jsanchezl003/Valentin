const movies = [
    { 
      title: 'The Shawshank Redemption', 
      description: 'Dos hombres encarcelados establecen una fuerte amistad durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común.',
      director: 'Frank Darabont',
      genre: 'Drama',
      releaseYear: 1994,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/shawshank_redemption_ver1_xxlg_1024x1024@2x.jpg?v=1610552654'
    },
    { 
      title: 'The Godfather', 
      description: 'El patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su renuente hijo.',
      director: 'Francis Ford Coppola',
      genre: 'Crimen, Drama',
      releaseYear: 1972,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/jc171_1024x1024@2x.jpg?v=1590760283'
    },
    { 
      title: 'The Dark Knight', 
      description: 'Cuando el peligro conocido como el Joker siembra el caos en Gotham, Batman debe aceptar uno de los mayores desafíos psicológicos y físicos para combatir la injusticia.',
      director: 'Christopher Nolan',
      genre: 'Acción, Crimen, Drama',
      releaseYear: 2008,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/dark_knight_ver5_xxlg_300x300.jpg?v=1571176658'
    },
    { 
      title: 'Pulp Fiction', 
      description: 'Las vidas de dos sicarios, un boxeador, un gánster y su esposa, y un par de bandidos de restaurante se entrelazan en cuatro cuentos de violencia y redención.',
      director: 'Quentin Tarantino',
      genre: 'Crimen, Drama',
      releaseYear: 1994,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/pulp_fiction_ver2_xxlg_1024x1024@2x.jpg?v=1579934456'
    },
    { 
      title: 'Schindler\'s List', 
      description: 'En Polonia ocupada por los alemanes durante la Segunda Guerra Mundial, el industrial Oskar Schindler se preocupa gradualmente por su fuerza laboral judía después de presenciar su persecución por los nazis.',
      director: 'Steven Spielberg',
      genre: 'Biografía, Drama, Historia',
      releaseYear: 1993,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/schindlers_list_xxlg_300x300.jpg?v=1593785445'
    },
    { 
      title: 'Forrest Gump', 
      description: 'Las presidencias de Kennedy y Johnson, los eventos de Vietnam, Watergate y otros eventos históricos se desarrollan desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75, cuyo único deseo es reunirse con su amor de la infancia.',
      director: 'Robert Zemeckis',
      genre: 'Drama, Romance',
      releaseYear: 1994,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/Forrest-Gump-movie_1024x1024@2x.jpg?v=1594649732'
    },
    { 
      title: 'Inception', 
      description: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de intercambio de sueños recibe la tarea inversa de plantar una idea en la mente de un director ejecutivo.',
      director: 'Christopher Nolan',
      genre: 'Acción, Aventura, Ciencia ficción',
      releaseYear: 2010,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/inception_ver2_xxlg_540x.jpg?v=1574870710'
    },
    { 
      title: 'The Matrix', 
      description: 'Un hacker informático aprende de rebeldes misteriosos sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.',
      director: 'Lana Wachowski, Lilly Wachowski',
      genre: 'Acción, Ciencia ficción',
      releaseYear: 1999,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/NEU_-_Matrix_1024x1024@2x.jpg?v=1632238741'
    },
    { 
      title: 'Goodfellas', 
      description: 'La historia de Henry Hill y su vida en la mafia, cubriendo su relación con su esposa Karen Hill y sus socios mafiosos Jimmy Conway y Tommy DeVito en el sindicato del crimen ítaloamericano.',
      director: 'Martin Scorsese',
      genre: 'Biografía, Crimen, Drama',
      releaseYear: 1990,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/goodfellas_xxlg_1024x1024@2x.jpg?v=1589046727'
    },
    { 
      title: 'The Silence of the Lambs', 
      description: 'Un joven cadete del FBI debe recibir la ayuda de un asesino en serie encarcelado y manipulador para ayudar a atrapar a otro asesino en serie, un loco que despelleja a sus víctimas.',
      director: 'Jonathan Demme',
      genre: 'Crimen, Drama, Thriller',
      releaseYear: 1991,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/2_3a70ac00-553d-4924-ba68-c8d18be8c86d_300x300.jpg?v=1596087658'
    },
    { 
      title: 'Star Wars: Episode V - The Empire Strikes Back', 
      description: 'Después de que los Rebeldes son brutalmente sobrepasados por el Imperio en el planeta de hielo Hoth, Luke Skywalker comienza el entrenamiento Jedi con Yoda, mientras que sus amigos son perseguidos por toda la galaxia por Darth Vader y el cazador de recompensas Boba Fett.',
      director: 'Irvin Kershner',
      genre: 'Acción, Aventura, Fantasía',
      releaseYear: 1980,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/empire_strikes_back_ver4_xxlg_1024x1024@2x.jpg?v=1621954044'
    },
    { 
      title: 'Se7en', 
      description: 'Dos detectives, un novato y un veterano, rastrean a un asesino en serie que utiliza los siete pecados capitales como sus motivos.',
      director: 'David Fincher',
      genre: 'Crimen, Drama, Misterio',
      releaseYear: 1995,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/seven_ver1_xxlg_540x.jpg?v=1609605531'
    },
    { 
      title: 'The Lord of the Rings: The Fellowship of the Ring', 
      description: 'Un grupo de aventureros se embarca en un viaje para destruir un poderoso anillo y salvar a su mundo de la oscuridad eterna.',
      director: 'Peter Jackson',
      genre: 'Acción, Aventura, Drama',
      releaseYear: 2001,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/200865_1024x1024@2x.png?v=1632238666'
    },
    { 
      title: 'The Lion King', 
      description: 'Un joven león princepe huye de su reino solo para aprender la verdadera importancia de la responsabilidad y la valentía.',
      director: 'Roger Allers, Rob Minkoff',
      genre: 'Animación, Aventura, Drama',
      releaseYear: 1994,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/e929395122f91fbdbb75c998e65a23f6_1024x1024@2x.jpg?v=1605278724'
    },
    { 
      title: 'Gladiator', 
      description: 'Un ex-general romano que se convierte en esclavo gladiador se embarca en una misión para vengar el asesinato de su familia por parte de un emperador corrupto.',
      director: 'Ridley Scott',
      genre: 'Acción, Aventura, Drama',
      releaseYear: 2000,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/GLADIATOR1_1024x1024@2x.jpg?v=1595230143'
    },
    { 
      title: 'The Green Mile', 
      description: 'Los guardias de la prisión en el corredor de la muerte en una prisión de Louisiana en la década de 1930 tienen una visión sobrenatural de uno de los reclusos.',
      director: 'Frank Darabont',
      genre: 'Drama, Fantasía, Misterio',
      releaseYear: 1999,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/THEGREENMILE1_540x.jpg?v=1594972086'
    },
    { 
      title: 'Saving Private Ryan', 
      description: 'Tras el desembarco de Normandía, un grupo de soldados estadounidenses encuentra al cabo James Ryan, cuyos tres hermanos han muerto en combate. Deciden arriesgar sus vidas para salvar al soldado Ryan.',
      director: 'Steven Spielberg',
      genre: 'Drama, Bélico',
      releaseYear: 1998,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/saving_private_ryan_ver2_xxlg_1024x1024@2x.jpg?v=1596764547'
    },
    { 
      title: 'The Dark Knight Rises', 
      description: 'Ocho años después de la desaparición de Batman, Bruce Wayne se enfrenta a un nuevo villano, Bane, quien planea destruir la ciudad de Gotham y exponer la verdad sobre la reputación de Batman.',
      director: 'Christopher Nolan',
      genre: 'Acción, Crimen, Drama',
      releaseYear: 2012,
      urlCover: 'https://moviepostermexico.com/cdn/shop/products/501201307_1_1024x1024@2x.jpg?v=1590926914'
    },
  ];
  
  module.exports = movies;
  