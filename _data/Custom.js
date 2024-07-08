const custom_options = {

    jacket: {
        style: [
            {
                title: 'Classic',
                description: 'Well-balanced & highly versatile, ideal for work, weekends & events.',
                img: '/jackets/SBS.avif'
            },
            { title: 'Double Breasted', description: 'Ageless & bold, double-breasted fits make a statement that transcends time & trends.', img: '/jackets/DBS.avif' },
            { title: 'Casual', description: 'Sporty & adaptable with an easygoing appeal. Perfect for an elevated casual style.', img: '/jackets/CS.avif' }
        ],

        lining: [
            { title: 'Fully Lined', description: 'Features a linking throughout the entirety of a jackets body and arms.', img: '/linings/fully_lined.avif' },
            { title: 'Half Lined', description: 'Features a linking throughout the top half of a jackets interior, including the arms.', img: '/linings/half_lined.avif' },
            { title: 'Butterfly Lining', description: 'A hand-stitched finish on unstructured jackets covering only the upper back.', img: '/linings/butterfly_lined.avif' },
            { title: 'Unlined', description: 'Unlined jackets feature lining only in the sleeves, with none throughout the body.', img: '/linings/unlined.avif' }
        ],

        button: [
            { title: 'Black', description: '', img: '' },
            { title: 'Dark Brown', description: 'G8', img: '' },
            { title: 'Brown', description: '', img: '' },
            { title: 'Light Brown', description: '', img: '' },
            { title: 'Beige', description: '', img: '' },
            { title: 'Cream', description: '', img: '' },
            { title: 'Off-White', description: '', img: '' },
            { title: 'Light-Grey', description: '', img: '' }
        ],
        lapel: [
            { title: 'Notch', description: 'The most standard and versatile lapel works well for any occasion.', img: '/lapels/notch_lapel.avif' },
            { title: 'Concave', description: 'A slightly widened notch lapel that features a subtle curvature', img: '/lapels/concave_lapel.avif' },
            { title: 'Peak', description: 'Peak lapels broaden the shoulders and are more angular with a bold upward peak.', img: '/lapels/peak_lapel.avif' },
            { title: 'Straight', description: 'Provides a sharp, strong aesthetic that broadens the shoulders.', img: '/lapels/straight_peak_lapel.avif' }
        ],

        canvas: [
            { title: 'Full Canvas', description: 'This cotton canvas lines the full jacket for added shape, drape & structure.', img: '/canvas/full_canvas.avif' },
            { title: 'Half Canvas', description: 'This cotton canvas lines half the jacket for added shape, drape & structure.', img: '/canvas/half_canvas.avif' },
            { title: 'Unconstructed', description: 'Crafted without canvas, unconstructed jackets offer a sporty, lightweight and comfortable wear.', img: '/canvas/unconstructed_canvas.avif' }
        ]
    },

    trouser: {
        waistband: [
            { title: 'Standard Button', description: 'A classic, straightforward waistband with an exposed button.', img: '' },
            { title: 'Standard Hidden Button', description: 'Our classic waistband with a single hidden button under a squared shaped closure.', img: '' },
            { title: 'Drawstring Elasticated Sides', description: 'A partially elastic waistband with a drawstring closure', img: '' },
            { title: 'Extended Peak', description: 'A bold sartorial closure with a extended peak and a single exposed button. Found on our Braddon trouser', img: '' },
            { title: 'Extended Straight', description: 'A sleek, waistband with a hidden button and single belt loop for securing the extended closure. Found on our Brentwood trouser', img: '' },
            { title: 'Extended Peak Slim', description: 'This sartorial waistband features a slim peak closure with two belt loops and exposed button. Found on our Blake trouser', img: '' },
            { title: 'Single Sided Closure', description: 'A clean, featureless front, using instead a buckle closure on the right hip of the waistband. Found on our Fellini trouser', img: '' },
            { title: 'Double Side Closure', description: 'This military-inspired style features a distinct adjustable buckles on both hips and a full extension across the front.', img: '' }
        ],
        pocket: [
            { title: 'Slanted', description: '', img: '' },
            { title: 'Jetted', description: '', img: '' },
            { title: 'Seam', description: '', img: '' },
        ],
        pleat: [
            { title: 'None', description: '', img: '' },
            { title: 'Standard Single Pleat', description: '', img: '' },
            { title: 'Standard Double Pleat', description: '', img: '' },
            { title: 'Forward Single Pleat', description: '', img: '' },
            { title: 'Forward Double Pleat', description: '', img: '' },
        ],
        hem: [
            { title: 'Unfinished', description: '', img: '' },
            { title: 'Plain', description: '', img: '' },
            { title: 'Turn Up 4cm', description: '', img: '' },
            { title: 'Turn Up 5cm', description: '', img: '' },
        ],
        button: [
            { title: 'Brown', description: '', img: '' },
        ]

    },

    waistcoat: {
        closure: [
            { title: 'Single Breasted 4 Button', description: 'This classic single-breasted waistcoat is crafted with 4 buttons.', img: '' },
            { title: 'Single Breasted 5 Button', description: 'This classic single-breasted waistcoat is crafted with 5 buttons.', img: '' },
            { title: 'Single Breasted 6 Button', description: 'This classic single-breasted waistcoat is crafted with 6 buttons.', img: '' },
            { title: 'Double Breasted 6 Button', description: 'An elevated take on the traditional waistcoat, this double-breasted style features a 6-button closure.', img: '' },
            { title: 'Double Breasted 8 Button', description: 'A bolder, more elevated take on the traditional waistcoat, this double-breasted style features an 8 button closure.', img: '' }
        ],
        style: [
            { title: 'V Shaped', description: 'A common style for casual layering, without lapels for a clean finish.', img: '' },
            { title: 'Notch Lapel', description: 'For a versatile styling accent that add a fuller look to single-breasted waistcoats.', img: '' },
            { title: 'Peak Lapel', description: 'Classic and refined, peak lapels bring a touch of timeless elegance.', img: '' },
            { title: 'Horse Shoe', description: 'A formal pick, featuring a deep, rounded neckline and a collar with no lapel.', img: '' }
        ],
        pocket: [
            { title: 'Straight Pocket', description: 'Straight pockets are a common style featuring a pocket affixed to the inside of a lined garment.', img: '' },
            { title: 'Jetted Pocket', description: 'Formal & exclusively aesthetic, jetted pockets are defined by a fine trimmed slit cut into the fabric.', img: '' }
        ],
        back: [
            { title: 'Lining', description: 'This more formal style of waistcoat features a silk-lined back and is usually part of a 3-piece suit.', img: '' },
            { title: 'Fabric', description: 'This more casual style of waistcoat features a fabric-lined back and is perfect to wear as a separate.', img: '' }
        ],
        lining: [
            { title: 'Black', description: '', img: '' },
            { title: 'Dark Brown', description: 'G8', img: '' },
            { title: 'Brown', description: '', img: '' },
            { title: 'Light Brown', description: '', img: '' },
            { title: 'Beige', description: '', img: '' },
            { title: 'Cream', description: '', img: '' },
            { title: 'Off-White', description: '', img: '' },
            { title: 'Light-Grey', description: '', img: '' },
            { title: 'Off-White', description: '', img: '' },
            { title: 'Light-Grey', description: '', img: '' }
        ],
        button: [
            { title: 'Black', description: '', img: '' },
            { title: 'Dark Brown', description: 'G8', img: '' },
            { title: 'Brown', description: '', img: '' },
            { title: 'Light Brown', description: '', img: '' },
            { title: 'Beige', description: '', img: '' },
            { title: 'Cream', description: '', img: '' },
            { title: 'Off-White', description: '', img: '' },
            { title: 'Light-Grey', description: '', img: '' }
        ]
    },

    materials: [
        {
            "title": "Satin",
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
            "title": "Corduroy",
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
            "title": "Cotton Linen",
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
            "title": "Super 100s",
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
            "title": "Super 110s",
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
            "title": "Super 130s",
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
            "title": "Flannel",
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
            "title": "Over Coat",
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
            "title": "Shirt Fabric",
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
            "title": "Wrinkle Free",
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


};

export default custom_options;
