const materials = [
    {
        "name": "Satin",
        "composition": "100% Polyester",
        "description": "Smooth, glossy fabric typically used for formal wear and lingerie.",
        "img": "https://m.media-amazon.com/images/I/91852GbuTnL._AC_UF894,1000_QL80_.jpg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Corduroy",
        "composition": "100% Cotton",
        "description": "Textured fabric with intricate patterns, ideal for upholstery and outerwear.",
        "img": "https://www.hempfortex.com/cdn/shop/products/HG4578_2_800x.jpg?v=1642149505",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Cotton Linen",
        "composition": "50% Cotton, 50% Linen",
        "description": "Breathable and lightweight fabric perfect for summer wear.",
        "img": "https://i.ebayimg.com/images/g/JrcAAOSwukVkyOhd/s-l1600.jpg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Super 100s",
        "composition": "100% Super 100 Wool",
        "description": "High-quality wool fabric with excellent durability and comfort.",
        "img": "https://assets-global.website-files.com/5fb638ef16441f801761b4e1/5fb7ae85db3f05507f80120f_MAIN.jpeg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Super 110s",
        "composition": "100% Super 110 Wool",
        "description": "High-quality wool fabric offering a perfect balance of comfort and durability.",
        "img": "https://www.joelandsonfabrics.com/cdn/shop/files/21178d_385x.jpg?v=1688126139",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Super 130s",
        "composition": "100% Super 130 Wool",
        "description": "Extremely fine wool fabric for luxurious and comfortable suits.",
        "img": "https://www.joelandsonfabrics.com/cdn/shop/files/23829dpurewoolsuper130_s_385x.jpg?v=1698435400",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Flannel",
        "composition": "100% Cotton",
        "description": "Soft, warm fabric perfect for casual shirts and pajamas.",
        "img": "https://www.joann.com/on/demandware.static/-/Library-Sites-LibraryJoAnnShared/default/dwf5ffb2ec/static/landingpage/flannelrama/fy24/3124-87145_4x1_01_600x600.jpg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Over Coat",
        "composition": "100% Wool",
        "description": "Thick and warm fabric ideal for overcoats and winter wear.",
        "img": "https://i.etsystatic.com/9202237/r/il/5bf289/4555300154/il_570xN.4555300154_gw5w.jpg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Shirt Fabric",
        "composition": "100% Cotton",
        "description": "Versatile and durable fabric suitable for dress shirts and casual shirts.",
        "img": "https://example.com/images/shirt-fabric.jpg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    },
    {
        "name": "Wrinkle Free",
        "composition": "60% Cotton, 40% Polyester",
        "description": "Easy-care fabric that resists wrinkles, perfect for travel and daily wear.",
        "img": "https://www.ecotextile.com/images/stories/2014/February/smooth-fabric.jpg",
        "colors": [
            { "color": "Red", "code": "#FF4500" },
            { "color": "Navy", "code": "#1A2D5C" },
            { "color": "Charcoal", "code": "#36454F" },
            { "color": "Black", "code": "#282C35" },
            { "color": "Grey", "code": "#A9A9A9" }
        ]
    }

]