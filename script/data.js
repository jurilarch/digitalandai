const coffees = {
    "coffeshop": [
        {
            "name":              "Caffè Lab – Etiopia",
            "image":             "DSC06867.png",
            "country":           "Ethiopia",
            "region":            "Bona Zuria/Sidama",
            "sea_level":         "2.190m",
            "sca":               "87",
            "flavours":   [
                "White Grapes",
                "Orange",
                "Peach"
            ],
            "appointment_label": "Make an appointment",
            "colors": "caffe-lab",
            "ausgetrunken": false
        },
        {
            "name":              "Caffè Lab – Costarica",
            "image":             "DSC06868.png",
            "country":           "Entre Rios",
            "region":            "Bona Zuria/Sidama",
            "sea_level":         "2.100 - 1.400m",
            "sca":               "85.75",
            "flavours":   [
                "Citrus Fruits",
                "Cherry",
                "Caramel"
            ],
            "appointment_label": "Schedule a ☕ date",
            "colors": "caffe-lab",
            "ausgetrunken": false
        },
        {
            "name":              "Caffè Lab – Guatemala",
            "image":             "DSC06869.png",
            "country":           "Guatemala",
            "region":            "Antigua",
            "sea_level":         "1.900m",
            "sca":               "88",
            "flavours":   [
                "Peach",
                "Flowers",
                "Green Tea"
            ],
            "appointment_label": "Fancy a cuppa?",
            "colors": "caffe-lab",
            "ausgetrunken": false
        },
        {
            "name":              "Caffè Lab – Kenya",
            "image":             "DSC06870.png",
            "country":           "Kenya",
            "region":            "Nyeri",
            "sea_level":         "1.750m",
            "sca":               "87",
            "flavours":   [
                "Lime",
                "Ginger",
                "Jasmin"
            ],
            "appointment_label": "I want this",
            "colors": "caffe-lab",
            "ausgetrunken": false
        },
        {
            "name":              "Caroma – Guatemala",
            "image":             "DSC06871.png",
            "country":           "Guatemala",
            "region":            "Lampocoy",
            "sea_level":         "1.000 - 1.350m",
            "sca":               "81",
            "flavours":   [
                "Karamell",
                "Pekanuss",
                "Feine Fruchtnoten",
                "Johannisbeere",
                "Südfrüchte"
            ],
            "appointment_label": "Arrange a meeting",
            "colors": "caroma-orange",
            "ausgetrunken": true
        },
        {
            "name":              "Caroma – Lake Kivu Bio",
            "image":             "DSC06866.png",
            "country":           "Congo",
            "region":            "Lake Kivu",
            "sea_level":         "1.400 - 1.800m",
            "sca":               "84.5",
            "flavours":   [
                "Winey",
                "Ripe Red Fruits",
                "Balanced Body",
            ],
            "appointment_label": "Book appointment",
            "colors": "caroma-red",
            "ausgetrunken": true
        },
        
    ]
};

function coffeeFilter(coffee, filter) {
    return coffee.name.indexOf(filter) === -1;
}

function loadCoffee(filter=null) {
    for (const coffee of coffees.coffeshop) {
        if (filter != null && coffeeFilter(coffee, filter))
            continue;
        var block = template.cloneNode(true);
        if(!coffee.ausgetrunken) {
            const ad = block.getElementsByClassName('ausgetrunken')[0];
            ad.remove();
        }
        const tags = block.getElementsByClassName("tags")[0];
        const flavour_temp = tags.children[0];
        flavour_temp.remove();
        if(coffee.flavours.length != 0) {
            for (const flavour of coffee.flavours) {
                var flavour_cpy = flavour_temp.cloneNode(true);
                flavour_cpy.innerHTML = flavour_cpy.innerHTML.replace("$flavour", flavour);
                tags.appendChild(flavour_cpy);
            }
        }else{
            tags.parentNode.remove();
        }
        
        var raw = block.outerHTML;
        for (const [key, value] of Object.entries(coffee)) {
            raw = raw.replace("$"+key, value);
        }
        coffeshop.appendChild(block);
        block.outerHTML = raw;    
    }
}

var template = null;
var coffeshop = null;

(function(){
    template = document.getElementById("coffee-template");
    template.remove();
    coffeshop = document.getElementById("coffeeshop");
    loadCoffee();
})();