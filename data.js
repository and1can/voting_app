window.Data = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const data = [
    {
      id: 1,
      title: 'Honey Garlic Chicken',
      description: 'chicken thighs, salt, 6 garlic cloves, honey, water/chicken broth, rice wine vinegar, soy sauce',
      url: 'http://cafedelites.com/2016/09/04/easy-honey-garlic-chicken/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/honeygarlicchicken.png',
    },
    {
      id: 2,
      title: 'Quick Korean Beef',
      description: 'soy sauce, brown sugar, garlic cloves, grated ginger, corn starch, vegetable oil, ground beef, onions, sesame seeds',
      url: 'http://www.unicornsinthekitchen.com/quick-korean-beef/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/quickkoreanbeef.png',
    },
    {
      id: 3,
      title: 'Twice Baked Buffalo Chicken Potatoes',
      description: 'olive oil, 1 celery rib, 1 large carrot, 1 small onion, rotisserie chicken, hot sauce, stick butter, dressing packet, sour cream, cream cheese, monterey jack cheese, gorgonzola crumbled',
      url: 'http://saygraceblog.com/2016/09/14/twice-baked-buffalo-chicken-potatoes/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/bakedpotatoes.png',
    },
    {
      id: 4,
      title: 'Teriyaki Chicken',
      description: 'soy sauce, water, mirin, rice wine vinegar, granulated sugar, brown sugar, garlic powder, ground ginger, cornstarch',
      url: 'http://bakingmischief.com/2016/09/12/easy-teriyaki-chicken-for-two/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/teriyaki.png',
    },
    {
      id: 5,
      title: 'Korean Chicken Taco',
      description: 'boneless thighs, soy sauce, sugar, minced garlic, ground ginger, sesame oil, green onions, cole slaw mix, frozen corn, avocado or olive oil, mayonnaise, sirarcha chile sauce, salt and pepper, sesame seeds, corn tortillas',
      url: 'http://annas-bananas.com/korean-chicken-tacos/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/koreanchickentaco.png',
    },
    {
      id: 6,
      title: 'Kung Pao Shrimp Taco',
      description: 'shrimp, sesame oil, soy sauce, crushed red pepper, rice wine vinegar, garlic, honey, mini peppers, plain greek yogurt, jalapeno, medium lime, shredded red cabbage, radishes, tortillas',
      url: 'http://www.jaroflemons.com/kung-pao-shrimp-tacos-with-jalapeno-sauce/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/kungpaoshrimp.png',
    },
    {
      id: 7,
      title: 'Juicy Chargrilled Lime Chicken',
      description: 'soy sauce, balsamic vinegar, olive oil, brown sugar, worcestershire sauce, honey mustard, dried thyme, garlic cloves, small lime',
      url: 'http://kitchenmason.com/2016/08/10/juicy-chargrilled-lime-chicken/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/arceus.png',
      product_image_url: 'images/products/chargrilledchicken.png',
    },
  ];

  return data;
})();
