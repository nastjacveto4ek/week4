const kool = {
    nimi: "Hogwarts",
    asukoht: {
      linn: "Hogsmeade",
      maakond: "Šoti Kõrge-Šotimaa",
      riik: "Suurbritannia"
    },
    õpilased: [
      {
        eesnimi: "Harry",
        perenimi: "Potter",
        majad: ["Gryffindor", "Kolmas aasta"]
      },
      {
        eesnimi: "Hermione",
        perenimi: "Granger",
        majad: ["Gryffindor", "Kolmas aasta"]
      },
      {
        eesnimi: "Ronald",
        perenimi: "Weasley",
        majad: ["Gryffindor", "Kolmas aasta"]
      }
    ]
  };


  const {õpilased: students} = kool;
  const [harry, hermione, ronald] = students;
 
  const {eesnimi: harryFirstName} = harry;
  const {eesnimi: hErmioneFirstName} = hermione;
  const {eesnimi: ronaldFirstName} = ronald;

  console.log(`${harryFirstName}, ${hErmioneFirstName} and ${ronaldFirstName} are friends.`);